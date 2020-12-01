import React, {useState} from 'react'

import './Login.css'


const Login = () =>{
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    
    const onEmailChange = (event) =>{
        setLoginEmail(event.target.value)
    }
    const onPassChange = (event) =>{
        setLoginPass(event.target.value)
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
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onEmailChange()}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={onPassChange()}></input>
                    </div>

                    <div type="submit" class="btn btn-primary btn-lg" id="btn-submit-login">Submit</div>

                </form>

            </div>

        </section>
    )
}

export default Login