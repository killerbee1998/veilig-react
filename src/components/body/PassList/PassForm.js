import React, { useEffect, useState } from 'react'
import {Modal, Button, FormCheck} from 'react-bootstrap';

import {genPassUrl, genPassphraseUrl} from '../../../urlData/urlData'

import './PassForm.css'

const PassForm = ({show, handleClose}) =>{
    const [inputType, setInputType] = useState('password')
    const [userPass, setUserPass] = useState('')
    const [passType,setPassType] = useState('password')

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
        }else{
            setInputType('password')
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

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>User Name</p>
                    <input type='text'></input>
                </div>

                <div>
                    <p>URL</p>
                    <input type='text'></input>
                </div>

                <div>
                    <p>Password</p>
                    <input type={inputType} value={userPass} onChange={handlePassChange}></input>
                    <img src = 'spin.svg' class = 'passItem' onClick={genPass}></img>
                    <img src = 'view.svg' class = 'passItem' onClick={changeInputType}></img>
                    <input type='checkbox' id='passTypeBox' onClick={changePassType}></input>
                    <label htmlFor='passTypeBox'> Passphrase</label>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PassForm