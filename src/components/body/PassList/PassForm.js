import React, { useEffect, useState } from 'react'
import {Modal, Button, FormCheck} from 'react-bootstrap';

import {genPassUrl} from '../../../urlData/urlData'

import './PassForm.css'

const PassForm = ({show, handleClose}) =>{
    const [inputType, setInputType] = useState('password')
    const [userPass, setUserPass] = useState('')

    const genPass = async() => {
        const response = await fetch(genPassUrl);
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
                    <img src = 'spin.svg' id = 'genPass' onClick={genPass}></img>
                    <img src = 'view.svg' id = 'genPass' onClick={changeInputType}></img>
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