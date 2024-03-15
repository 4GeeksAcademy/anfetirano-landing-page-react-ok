import React from 'react'

import CustomButton from './CustomButton';

const Card = (props) => {

    return (
        <div>
            <div className="card d-flex mt-3 ms-3 me-3">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <div className="button text-center">
                        <CustomButton />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card

