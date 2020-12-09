import React, {useEffect, useState} from 'react'

import './Navbar.css'

const Navbar = ({loginStatus, setLoginStatus}) =>{
    const [navBody, setNavBody] = useState(<div className = 'navItem'> Log Out</div>)
    
    const onLoginClick = () =>{
        setLoginStatus('onLogin');
    }

    const onRegisterClick = () =>{
        setLoginStatus('onRegister');
    }

    useEffect( ()=>{
        switch(loginStatus){
            case 'LoggedIn':
                setNavBody(<div className = 'navItem'> Log Out</div>)
                break
            case 'onRegister':
                setNavBody(<div className = 'navItem' onClick = {onLoginClick}> Log In</div>)
                break
            case 'onLogin':
                setNavBody(<div className = 'navItem' onClick = {onRegisterClick}> Register</div>);           
            default:
                setNavBody(<div className = 'navBody'>
                    <div className = 'navItem' onClick = {onLoginClick}> Log In</div>
                    <div className = 'navItem' onClick = {onRegisterClick}> Register</div>
                    </div>)
                break

        }
    }, )

    return(
        <nav>
            {navBody}
        </nav>
    )
}

export default Navbar;