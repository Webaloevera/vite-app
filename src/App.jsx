import { Route, Routes } from "react-router";
import React, { useEffect, useState } from 'react';
import { Header, Footer, ImagePreloader } from './components';
import { Home, Product } from './pages';
import axios from "axios";
import './styles/app.css';


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
              <Route path='/' element={<Home store={appState}/>} exact/>
              <Route path='/product' element={<Product store={appState}/>} exact/>
            </Routes>
            {
            <ImagePreloader src={'https://cdn2.thedogapi.com/images/rkiByec47.jpg'} alt={'123'}/> 
            }
          </main>
        <Footer/>
    </div>
  );
}



export default App;
