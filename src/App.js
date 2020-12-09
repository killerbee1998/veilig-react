import React, { useEffect, useState } from 'react'

import './App.css';

import Login from './components/body/Login/Login'
import Register from './components/body/Register/Register'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [loginStatus, setLoginStatus] = useState('Onlogin');
  const [body,setBody] = useState(<Register/>);
  useEffect(()=>{
    switch(loginStatus){
      case 'LoggedIn':
          setBody(<Login/>)
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
