import React, {useEffect, useState} from 'react'

import './Navbar.css'

const Navbar = ({loginStatus}) =>{
    const [navBody, setNavBody] = useState(<div className = 'navItem'> Log Out</div>)
    useEffect( ()=>{
        switch(loginStatus){
            case 'LoggedIn':
                setNavBody(<div className = 'navItem'> Log Out</div>)
                break
            case 'onRegister':
                setNavBody(<div className = 'navItem'> Log In</div>)
                break                
            default:
                setNavBody(<div className = 'navBody'>
                    <div className = 'navItem'> Log In</div>
                    <div className = 'navItem'> Register</div>
                    </div>)
                break

        }
    })
    return(
        <nav>
            {navBody}
        </nav>
    )
}

export default Navbar;