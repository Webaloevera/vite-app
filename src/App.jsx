import { Route, Routes } from "react-router";
import React, { useEffect, useState } from 'react';
import { Header, Footer } from './components';
import { Home, Product } from './pages';
import ProductPost  from './ProductPost';
import axios from "axios";
import './styles/app.css';


function App() {

    const [appState, setAppState] = useState();
  
useEffect(() => {     
    const getData = async () => {  
      await axios.get('http://localhost:3001/products/')  
      .then(res => { 
        const allCards = res.data;
        setAppState(allCards);
        // console.log(allCards) 
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
              <Route path="/post/:id" element={<ProductPost />} exact/>
            </Routes>
          </main>
        <Footer/>
    </div>
  );
}



export default App;
