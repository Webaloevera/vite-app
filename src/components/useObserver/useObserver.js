import { useState, useEffect } from 'react';

export default function useObserver(options) {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);
  
    const [observer] = useState(new IntersectionObserver((observerEntries) => {
        setEntries(observerEntries);
      }, options))
  
    useEffect(() => {
      const currentObserver = observer;
      if (elements.length > 0) {
        elements.forEach((element) => currentObserver.observe(element));
      }
      return function cleanUp() {
        if (currentObserver) {
          currentObserver.disconnect();
        }
      };
    }, [elements]);
  
    return [observer, setElements, entries];
  }