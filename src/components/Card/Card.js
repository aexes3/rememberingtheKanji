import React from 'react';
import './Card.css';

function Card (props) {
    return(
        <div 
        className="card" 
        value={props.id}
        onClick={() => props.clickKanji(props.id)}>

            <img
            id={props.id}
            src={props.image}
            alt={props.id}
            />
        </div>
    )
}

export default Card;