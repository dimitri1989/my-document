import Form from './Form';
import './App.css';
import { useState } from 'react';

function App() {
  var [userInfo,setUserInfo]= useState([])
  function submitHandler(text){
    setUserInfo([...userInfo,{...text}])
    console.log(userInfo);
    console.log(text);
  }
  return (
    <div className="App">
     <Form userInfo={submitHandler} />
    </div>
  );
}

export default App;
