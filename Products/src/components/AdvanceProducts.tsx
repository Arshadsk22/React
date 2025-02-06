import React, { useState, useEffect } from 'react';
import './Products.css';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

function AdvanceProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container py-5">
            <h1>List of the Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} style={{ objectFit: 'cover', height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><strong>Category:</strong> {product.category}</p>
                                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdvanceProducts;