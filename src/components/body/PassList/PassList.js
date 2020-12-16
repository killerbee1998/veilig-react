import React, { useState, useEffect } from 'react'

import PassForm from './PassForm'

import {displayPassUrl} from '../../../urlData/urlData'

import './PassList.css'
import PassItem from './PassItem'

const PassList = () =>{
    const [show, setShow] = useState(false);
    const [passList, setPassList] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    
    const fetchUserPass = async() => {
        const data = {token: localStorage.getItem('token'), authKey: localStorage.getItem('key')}

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
        let temp = [];
        for(let i=0;i<data.length;++i){
            temp.push(<PassItem/>)
        }
        setPassList(temp)
        console.log(data)
    }, [localStorage.getItem('token'), localStorage.getItem('key')])
    

    return(
        <div>
            {passList}

            <div className = 'addBtn'>
                <button type="button" className="btn btn-primary" onClick ={handleShow}>Add Item</button>
            </div>

            <PassForm show = {show} handleClose = {handleClose}/>
        </div>
    )
}

export default PassList;