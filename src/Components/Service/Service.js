import React from 'react';
import './Service.css'
const Service = (props) => {
    // console.log(props)
    const { Types, img, price, quality, duration, rating } = props.product;
    return (
        <div>
            <div className="">
                <div className="single-service">
                    <h2>Name of art: <span className="name-style">{Types}</span></h2>
                    <img className="image" src={img} alt="" />
                    <h4>Quality: {quality}</h4>
                    <p>Price: ${price}</p>
                    <h3>Duration: {duration}</h3>
                    <h4>Ratings: {rating}</h4>
                    <i class="fab fa-facebook blue"></i> <i class="fab fa-instagram-square orange"></i> <i class="fab fa-twitter blue"></i><br />
                    <br />
                    <button
                        onClick={() => props.handleAddToCart(props.product)}
                        className="btn"> Add order</button>
                </div>

            </div>

        </div>
    );
};

export default Service;