import React from 'react';
import './Card.css';

function Card (props) {
    return(
        <div 
        className="card" 
        key={props.id}
        onClick={()=> props.selectKanji(props.id)}>
            <img
            id={props.id}
            src={props.image}
            alt={props.id}
            />
        </div>
    )
}

export default Card;