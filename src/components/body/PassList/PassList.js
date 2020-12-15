import React, { useState, useEffect } from 'react'

import {Modal, Button} from 'react-bootstrap';

import {displayPassUrl} from '../../../urlData/urlData'

import './PassList.css'

const PassList = () =>{
    const [show, setShow] = useState(false);

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
        console.log(data)
    }, [localStorage.getItem('token'), localStorage.getItem('key')])
    

    const passList = [];
    return(
        <div>
            {passList}

            <div className = 'addBtn'>
                <button type="button" class="btn btn-primary" onClick ={handleShow}>Add Item</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default PassList;