import React from 'react';
import './Service.css'
const Service = (props) => {
    console.log(props.product)
    const { Types, img, price, quality, duration, rating } = props.product;
    return (
        <div>
            <div className="">
                <div className="single-service">
                    <h2>Name of art: {Types}</h2>
                    <img className="image" src={img} alt="" />
                    <h4>Quality: {quality}</h4>
                    <p>Price: tk{price}</p>
                    <h3>Duration: {duration}</h3>
                    <h4>Ratings: {rating}</h4>
                    <button className="btn">Add order</button>
                </div>

            </div>

        </div>
    );
};

export default Service;