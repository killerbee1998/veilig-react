import React, { useEffect, useState } from 'react'

import './App.css';

import Login from './components/body/Login/Login'
import Register from './components/body/Register/Register'
import Navbar from './components/Navbar/Navbar'
import PassList from './components/body/PassList/PassList'

function App() {

  const [loginStatus, setLoginStatus] = useState('onLogin');
  const [body,setBody] = useState(<Login/>);
  
  let token = localStorage.getItem('token')
  let key = localStorage.getItem('key');
   
  useEffect(()=>{
    switch(loginStatus){
      case 'LoggedIn':
          setBody(<PassList/>)
          break
      case 'onRegister':
          setBody(<Register/>)
          break
      case 'onLogin':
          setBody(<Login/>)           
      default:
          setBody(<Login/>)
          break
    }
  }, [loginStatus])

  return (
    <div className="App">
      <Navbar loginStatus = {loginStatus} setLoginStatus = {setLoginStatus}/>
      <div>
        {body}
      </div>
    </div>
  );
}

export default App;
