import React, {useState} from 'react'

import './Register.css'

import {registerUrl} from '../../../urlData/urlData'

const Register = () =>{

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPass, setRegisterPass] = useState('')

    const [errorMsg, setErrorMsg] = useState(<div></div>)

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
        console.log(response)
        if(response.status === 200){
            setErrorMsg(<div></div>)
            const responseData = await response.json()
        }else{
            setErrorMsg(<div className = 'errorMsg'>Email is already in use. Try again</div>)
        }
        
      }

    return(
        
        <section className="coloured-section" id="register">
            <div className = "container-header">
                <h1 id="header"> Veilig </h1>
            </div>
            <div className="container-form">

                <h1>Register</h1>

                <div>
                    {errorMsg}
                </div>

                <form>
                    <div className = 'form-group'>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onEmailChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={onPassChange}></input>
                    </div>

                    <div type="submit" className="btn btn-primary btn-lg" id="btn-submit-register" onClick={onRegisterSubmit}>Submit</div>

                </form>

            </div>

        </section>
    )
}

export default Register