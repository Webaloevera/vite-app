import { Route, Routes } from "react-router";
import React, { useEffect, useState } from 'react';
import { Header, Footer } from './components';
import { Home, Product } from './pages';
import axios from "axios";
import './styles/app.scss';


function App() {

    const [appState, setAppState] = useState();
  
useEffect(() => {     
    const getData = async () => {  
      await axios.get('https://api.thedogapi.com/v1/breeds?limit=10&page=0')  
      .then(res => { 
        const allCards = res.data;
        setAppState(allCards); 
      })  
      .catch(err => {  
        alert(err)  
      });  
    }  
    getData()  
  }, [])

  return (
    <div className="App">
        <Header/>
          <main>
            <Routes>
              <Route path='/' component={() => <Home store={appState}/>} exact/>
              <Route path='/product' component={() => <Product store={appState}/>} exact/>
            </Routes>
          </main>
        <Footer/>
    </div>
  );
}



export default App;
