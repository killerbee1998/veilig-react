import React from 'react'
import {Card} from 'react-bootstrap'

import './PassItem.css'

const PassItem = ({cardTitle}) =>{
    return(
        <Card style={{ width: '18rem', margin: '1rem', backgroundColor:'rgba(240,244,20,0.6', textAlign:'left'}}>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default PassItem;