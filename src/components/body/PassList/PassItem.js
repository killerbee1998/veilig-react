import React from 'react'
import {Card} from 'react-bootstrap'

import './PassItem.css'

const PassItem = ({cardTitle}) =>{
    const [hover, setHover] = useState('')
    const cardItemStyle = {
        ':hover':{
            backgroundColor:'rgba(15,11,235,0.6)'

        },

    }
    return(
        <Card style={{ width: '18rem', margin: '1rem', backgroundColor:'rgba(240,244,20,0.6)', textAlign:'left'}}>
            <Card.Body>
                <Card.Title style={cardItemStyle}>{cardTitle}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default PassItem;