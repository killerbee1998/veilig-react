import React from 'react'
import {Card} from 'react-bootstrap'

import './PassItem.css'

const PassItem = () =>{
    return(
        <Card style={{ width: '18rem', margin: '1rem', backgroundColor:'rgba(240,244,20,0.6', textAlign:'left'}}>
            <Card.Body>
                <Card.Title>User Password Item</Card.Title>
                <Card.Text> User Name</Card.Text>
                <Card.Text> Url</Card.Text>
                <Card.Text> Password</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PassItem;