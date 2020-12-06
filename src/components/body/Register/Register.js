import React, {useState} from 'react'

import './Register.css'

import {registerUrl} from '../../../urlData/urlData'

const Register = () =>{

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPass, setRegisterPass] = useState('')

    const onEmailChange = (event) =>{
        setRegisterEmail(event.target.value)
    }
    const onPassChange = (event) =>{
        setRegisterPass(event.target.value)
    }

    const onRegisterSubmit = async(event) => {
        const data = {email: registerEmail, pass: registerPass}
        const response = await fetch(registerUrl, {
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
        console.log(responseData)
        return responseData; 
      }

    return(
        
        <section className="coloured-section" id="register">
            <div className = "container-header">
                <h1 id="header"> Veilig </h1>
            </div>
            <div className="container-form">

                <h1>Register</h1>

                <form>
                    <div className = 'form-group'>
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onEmailChange}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={onPassChange}></input>
                    </div>

                    <div type="submit" class="btn btn-primary btn-lg" id="btn-submit-register" onClick={onRegisterSubmit}>Submit</div>

                </form>

            </div>

        </section>
    )
}

export default Register