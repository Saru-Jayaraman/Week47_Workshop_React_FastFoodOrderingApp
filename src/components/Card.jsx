import React from 'react';
import { BsCartPlus } from "react-icons/bs";

const Card = (props) => {
    return (
        <div className='card bg-light text-black'>
            <div className='card-header'>
                <img className='card-img-top' style={{height: "200px"}} src={props.image} alt={props.alt} title={props.title} />
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.description}</p>
                <p className='card-text'>SEK {props.price}</p>
                <button type='button' className='btn btn-dark btn-sm' onClick={props.addEvent}>{<BsCartPlus />}</button>
            </div>
        </div>
    );
};

export default Card;