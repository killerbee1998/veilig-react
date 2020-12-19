import React, { useEffect, useState } from 'react'
import {Modal, Button, FormCheck} from 'react-bootstrap';

import {genPassUrl, genPassphraseUrl, savePassUrl} from '../../../urlData/urlData'

import './PassForm.css'

const UpdatePassForm = ({show, handleClose, og_userName, og_userUrl, og_userPass}) =>{
    const [userName, setUserName] = useState('')
    const [userUrl, setUserUrl] = useState('')
    const [userPass, setUserPass] = useState('')

    const [inputType, setInputType] = useState('password')
    const [passType,setPassType] = useState('password')
    const [viewImgSrc, setViewImgSrc] = useState('visibility.svg')
    
    useEffect(() =>{
        setUserName(og_userName)
        setUserUrl(og_userUrl)
        setUserPass(og_userPass)
    }, [og_userName,og_userUrl, og_userPass])

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
            response = await fetch(genPassUrl);    
        }else{
            response = await fetch(genPassphraseUrl);
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
                    <input type='text' value={userName} onChange={handleNameChange}></input>
                </div>

                <div>
                    <p>URL</p>
                    <input type='text' value={userUrl} onChange={handleUrlChange}></input>
                </div>

                <div>
                    <p>Password</p>
                    <input type={inputType} value={userPass} onChange={handlePassChange}></input>
                    <img src = 'spin.svg' className = 'passItem' onClick={genPass}></img>
                    <img src = {viewImgSrc} className = 'passItem' onClick={changeInputType}></img>
                    <input type='checkbox' id='passTypeBox' onClick={changePassType}></input>
                    <label htmlFor='passTypeBox'> Passphrase</label>
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

export default UpdatePassForm