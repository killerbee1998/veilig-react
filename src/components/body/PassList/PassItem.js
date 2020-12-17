import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'

import './PassItem.css'

const PassItem = ({cardTitle}) =>{
    const [cardItemStyle, setCardItemStyle] = useState({
        width: '18rem',
        margin: '1rem',
        backgroundColor:'rgba(240,244,20,0.6)',
    })
    
    const handleOnMouseEnter = () =>{
        setCardItemStyle({
            width: '18rem',
            margin: '1rem',
            backgroundColor:'rgba(15,11,235,0.8)',
            color: 'rgba(255,255,255,1)'
        })
    }

    const handleOnMouseLeave = () =>{
        setCardItemStyle({ 
            width: '18rem',
            margin: '1rem',
            backgroundColor:'rgba(240,244,20,0.6)',
        })
    }

    return(
        <Card style={cardItemStyle} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default PassItem;