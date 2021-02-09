import React, { useEffect, useState } from 'react'
import {Modal, Button, FormCheck} from 'react-bootstrap';

import {genPassUrl, genPassphraseUrl, savePassUrl} from '../../../urlData/urlData'

import './PassForm.css'

const PassForm = ({show, handleClose, updatePassList}) =>{
    const [userName, setUserName] = useState('')
    const [userUrl, setUserUrl] = useState('')
    const [userPass, setUserPass] = useState('')

    const [inputType, setInputType] = useState('password')
    const [passType,setPassType] = useState('password')
    const [viewImgSrc, setViewImgSrc] = useState('visibility.svg')
    const [passFlags, setPassFlags] = useState('000');

    const saveUserPass = async() => {
        const data = {user_url: userUrl, user_name:userName, user_pass: userPass ,token: localStorage.getItem('token'), authKey: localStorage.getItem('key')}
        const response = await fetch(savePassUrl, {
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

    const genPass = async() => {
        let response = ''
        if(passType === 'password'){
            response = await fetch(genPassUrl +'/passFlags='+passFlags);    
        }else{
            response = await fetch(genPassphraseUrl+'/passFlags='+passFlags);
        }
        const responseData = await response.json()
        setUserPass(responseData)
    }

    const changeInputType = () =>{
        if(inputType === 'password'){
            setInputType('text')
            setViewImgSrc('view.svg')
        }else{
            setInputType('password')
            setViewImgSrc('visibility.svg')
        }
    }

    const changePassType = () =>{
        if(passType === 'password'){
            setPassType('passphrase')
        }else{
            setPassType('password')
        }
    }

    const setNums = () =>{
        if(passFlags[0] === '0'){
            setPassFlags('1'+passFlags[1]+passFlags[2])
        }else{
            setPassFlags('0'+passFlags[1]+passFlags[2])
        }
    }


    const setSpe = () =>{
        if(passFlags[1] === '0'){
            setPassFlags(passFlags[0]+'1'+passFlags[2])
        }else{
            setPassFlags(passFlags[0]+'0'+passFlags[2])
        }
    }


    const setCaps = () =>{
        if(passFlags[2] === '0'){
            setPassFlags(passFlags[0]+passFlags[1]+'1')
        }else{
            setPassFlags(passFlags[0]+passFlags[1]+'1')
        }

    }

    const handlePassChange = (event) =>{
        setUserPass(event.target.value)
    }

    const handleNameChange = (event) =>{
        setUserName(event.target.value)
    }

    const handleUrlChange = (event) =>{
        setUserUrl(event.target.value)
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>User Name</p>
                    <input type='text' onChange={handleNameChange}></input>
                </div>

                <div>
                    <p>URL</p>
                    <input type='text' onChange={handleUrlChange}></input>
                </div>

                <div>
                    <p>Password</p>
                    <input type={inputType} value={userPass} onChange={handlePassChange}></input>

                    <img src = 'spin.svg' className = 'passItem' onClick={genPass}></img>
                    <img src = {viewImgSrc} className = 'passItem' onClick={changeInputType}></img>
                </div>

                <div className='optionsHolder'>
                    <p> Options </p>
                    <input className = 'passOptions' type='checkbox' id='passTypeBox' onClick={changePassType}></input>
                    <label htmlFor='passTypeBox'> Passphrase</label>

                    <input className = 'passOptions' type='number' id='length' max='20' min='3'></input>
                    <label htmlFor='length'> Length </label>

                    <br></br>
                    <input className = 'passOptions' type='checkbox' id='numBox' onClick = {setNums}></input>
                    <label htmlFor='numBox'> Numbers</label>

                    <input className = 'passOptions' type='checkbox' id='speBox' onClick = {setSpe}></input>
                    <label htmlFor='speBox'> Sepcial</label>

                    <input className = 'passOptions' type='checkbox' id='capsBox' onClick = {setCaps}></input>
                    <label htmlFor='capsBox'> Capitals</label>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveUserPass}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PassForm