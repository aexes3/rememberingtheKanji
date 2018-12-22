import React from 'react';
import './Card.css';

function Card (props) {
    // console.log(props.thingIwanttoExecute())

    // let selectKanji = props.selectKanji;
    return(
        <div 
        className="card" 
        >
            <img
            onClick={() => props.thingIwanttoExecute(props.id)}
            id={props.id}
            src={props.image}
            alt={props.id}
            />
        </div>
    )
}

export default Card;