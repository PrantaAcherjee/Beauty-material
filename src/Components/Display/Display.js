import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Display.css'
const Display = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        // display product section 
        <div className="display-container">

            {/* items section  */}
            <div className="items-container">
                <h2>All service available here: {products.length}</h2>
                {
                    products.map(product => <Service product={product}
                    ></Service>)
                }
            </div>

            {/* calculation section  */}
            <div className="calculation-container">
                <h2>Selected services: 0</h2>
            </div>
        </div>
    );
};

export default Display;