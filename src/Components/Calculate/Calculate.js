import React from 'react';
import './Calculate.css'
const Calculate = (props) => {
    const { calculate } = props
    let total = 0;
    for (const product of calculate) {
        total = total + product.price

    }
    return (
        <div className="calculate-cart">
            <h2>Order Summary</h2>
            <h3>Total ordered: {props.calculate.length}</h3>

            <p>Total amount:{total} </p>
            <button className="btn">confirm us</button>
        </div>
    );
};

export default Calculate;