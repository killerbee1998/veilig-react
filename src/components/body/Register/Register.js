import React, {useState} from 'react'

import './Register.css'

const Register = () =>{

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPass, setRegisterPass] = useState('')

    const onEmailChange = (event) =>{
        setRegisterEmail(event.target.value)
    }
    const onPassChange = (event) =>{
        setRegisterPass(event.target.value)
    }

    return(
        
        <section className="coloured-section" id="register">
            <div className = "container-header">
                <h1 id="header"> Veilig </h1>
            </div>
            <div className="container-form">

<h1>Register</h1>

<form>
    <div className = 'form-group'>Login
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onEmailChange}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={onPassChange}></input>
                    </div>

                    <div type="submit" class="btn btn-primary btn-lg" id="btn-submit-register">Submit</div>

                </form>

            </div>

        </section>
    )
}

export default Register