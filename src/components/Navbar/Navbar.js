import React, {useEffect, useState} from 'react'

import './Navbar.css'

const Navbar = ({loginStatus, setLoginStatus}) =>{
    const [navBody, setNavBody] = useState(<div className = 'navItem'> Log In</div>)
    
    const onLoginClick = () =>{
        setLoginStatus('onLogin');
    }

    const onRegisterClick = () =>{
        setLoginStatus('onRegister');
    }

    const onLogoutClick = () =>{
        localStorage.setItem('token', [])
        localStorage.setItem('key', [])
        setLoginStatus('onLogin')
    }

    useEffect( ()=>{
        switch(loginStatus){
            case 'loggedIn':
                setNavBody(<div className = 'navItem' onClick={onLogoutClick}> Log Out</div>)
                break
            case 'onRegister':
                setNavBody(<div className = 'navItem' onClick = {onLoginClick}> Log In</div>)
                break
            case 'onLogin':
                setNavBody(<div className = 'navItem' onClick = {onRegisterClick}> Register</div>);
                break        
            default:
                setNavBody(<div className = 'navItem' onClick = {onRegisterClick}> Register</div>)
                break

        }
    },[loginStatus])

    return(
        <nav>
            {navBody}
        </nav>
    )
}

export default Navbar;