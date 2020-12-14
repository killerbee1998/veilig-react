import React, { useEffect } from 'react'

import {displayPassUrl} from '../../../urlData/urlData'

const PassList = () =>{
    
    const fetchUserPass = async() => {
        const data = {token: localStorage.getItem('token'), authKey: localStorage.getItem('key')}
        console.log(data)
        const response = await fetch(displayPassUrl, {
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
        
        return responseData; 
    }

    useEffect( async() =>{
        let data = await fetchUserPass()
        console.log(data)
    }, [localStorage.getItem('token'), localStorage.getItem('key')])
    

    const passList = [];
    return(
        <div>
            {passList}
        </div>
    )
}

export default PassList;