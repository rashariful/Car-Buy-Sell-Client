import React, { useState } from 'react';
import { useEffect } from 'react';


const MyProducts = () => {

const [products, setProducts] = useState([])

useEffect(()=>{
 fetch("http://localhost:5000/products")
 .then(res => res.json())
 .then(data => console.log(data))
},[])


    return (
        <div>
            <h1>product length is {products?.length}</h1>
        </div>
    );
};

export default MyProducts;