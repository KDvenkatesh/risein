import React from "react";
import Home from './home';
import Fp from './Firstpage';
import {BrowserRouter, Route , Routes} from 'react-router-dom';


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      {/* <Home/> */}
      
      <Route path="/" element={<Home/>}/>
      <Route path="/first" element={<Fp/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
