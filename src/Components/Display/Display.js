import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';

import Service from '../Service/Service';
import './Display.css'
const Display = () => {
    const [products, setProducts] = useState([]);
    const [calculation, setCalculation] = useState([])
    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        // console.log(product.Types)
        const newCalculation = [...calculation, product]
        setCalculation(newCalculation)
    }
    return (
        // display product section 
        <div className="display-container">

            {/* items section  */}
            <div className="items-container">
                {

                    products.map(product => <Service
                        // make unique element by name 
                        key={product.Types}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Service>)
                }
            </div>

            {/* calculation section  */}
            <div className="calculation-container">

                <Calculate calculate={calculation}></Calculate>
            </div>
        </div>
    );
};

export default Display;