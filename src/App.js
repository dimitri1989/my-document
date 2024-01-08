import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Form';
import Main from './Main';
import './App.css';


function App() {
  // function submitHandler(text){
  //   setUserInfo([...userInfo,{...text}])
  return (

    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Form/>} />
    <Route path='/main' element={<Main/>} />
  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
