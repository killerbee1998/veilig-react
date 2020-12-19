import React, { useState, useEffect } from 'react'

import PassForm from './PassForm'
import PassItem from './PassItem'
import UpdatePassForm from './UpdatePassForm'

import {displayPassUrl} from '../../../urlData/urlData'

import './PassList.css'

const PassList = () =>{
    const [show, setShow] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const [passList, setPassList] = useState([])
    const [ogVals, setOgVals] = useState(['','',''])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleUpdateClose = () => setShowUpdateForm(false);
    const handleUpdateShow = () => setShowUpdateForm(true);
    
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
            if(data[i].user_name!==[]){
                temp.push(<PassItem cardTitle={data[i].user_name} ogVals={[data[i].user_name, data[i].user_url, data[i].user_pass]} setOgVals={setOgVals} handleShow={handleUpdateShow}/>)
            }else if(data[i].user_url!==[]){
                temp.push(<PassItem cardTitle ={data[i].user_url} ogVals={[data[i].user_name, data[i].user_url, data[i].user_pass]} setOgVals={setOgVals} handleShow={handleUpdateShow}/>)
            }else{
                temp.push(<PassItem cardTitle ={data[i].user_pass} ogVals={[data[i].user_name, data[i].user_url, data[i].user_pass]} setOgVals={setOgVals} handleShow={handleUpdateShow}/>)
            }
        }
        setPassList(temp)
    }, [localStorage.getItem('token'), localStorage.getItem('key'), show])
    

    return(
        <div>
            <div className='cardListHolder'>
                {passList}
            </div>
            

            <div className = 'addBtn'>
                <button type="button" className="btn btn-primary" onClick ={handleShow}>Add Item</button>
            </div>

            <PassForm show = {show} handleClose = {handleClose}/>
            <UpdatePassForm show = {showUpdateForm} handleClose = {handleUpdateClose} og_userName={ogVals[0]} og_userUrl={ogVals[1]} og_userPass={ogVals[2]}/>
        </div>
    )
}

export default PassList;