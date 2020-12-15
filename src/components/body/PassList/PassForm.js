import React from 'react'
import {Modal, Button} from 'react-bootstrap';

const PassForm = ({show, handleClose}) =>{
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
                    <input type='password'></input>
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