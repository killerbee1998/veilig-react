import React, {useState} from 'react'

import './Login.css'

import {loginUrl} from '../../../urlData/urlData'

const Login = ({setLoginStatus,refreshToken}) =>{
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    
    const onEmailChange = (event) =>{
        setLoginEmail(event.target.value)
    }
    const onPassChange = (event) =>{
        setLoginPass(event.target.value)
    }

    const onLoginSubmit = async(event) => {
        const data = {email: loginEmail, pass: loginPass}
        const response = await fetch(loginUrl, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data) 
        });
        const responseData = await response.json()
        
        if(responseData !== 'LOGIN ERROR'){
            localStorage.setItem('token', responseData.token)
            localStorage.setItem('key', responseData.key)
            refreshToken();
            setLoginStatus('loggedIn')
        }

        return responseData; 
      }

    return(
        
        <section className="coloured-section" id="login">
            <div className = "container-header">
                <h1 id="header"> Veilig </h1>
            </div>
            <div className="container-form">

                <h1>Login</h1>

                <form>
                    <div className = 'form-group'>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onEmailChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={onPassChange}></input>
                    </div>

                    <div type="submit" className="btn btn-primary btn-lg" id="btn-submit-login" onClick={onLoginSubmit}>Submit</div>

                </form>

            </div>

        </section>
    )
}

export default Login