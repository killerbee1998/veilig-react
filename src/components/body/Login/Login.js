import React from 'react'

const Login = () =>{
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
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <div type="submit" class="btn btn-primary btn-lg" id="btn-submit-login">Submit</div>

                </form>

            </div>

        </section>
    )
}

export default Login