import React, { useEffect } from 'react'

import {displayPassUrl} from '../../../urlData/urlData'

const PassList = ({token, key}) =>{
    
    const fetchUserPass = async() => {
        const data = {token: token, key: key}
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
    }, [token, key])
    

    const passList = [];
    return(
        <div>
            {passList}
        </div>
    )
}

export default PassList;