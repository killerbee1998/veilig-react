import React, { useEffect, useState } from 'react'

import './App.css';

import Login from './components/body/Login/Login'
import Register from './components/body/Register/Register'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [loginStatus, setLoginStatus] = useState('');
  const [body,setBody] = useState(<Register/>);

  return (
    <div className="App">
      <Navbar loginStatus = {loginStatus}/>
      <div>
        {body}
      </div>
    </div>
  );
}

export default App;
