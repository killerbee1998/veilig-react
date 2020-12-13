import React from 'react'

const PassList = () =>{
    const fetchUserPass = async(event) => {
        const data = {token: token, key: key}
        const response = await fetch(displayPassnUrl, {
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

    const passList = [];
    return(
        <div>
            {passList}
        </div>
    )
}

export default PassList;