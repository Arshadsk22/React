import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  brand: string;
  rating: number;
  images: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError("Failed to load product details");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating}
      </p>
      <div>
        <strong>Images:</strong>
        <div className="d-flex flex-wrap">
          {product.images.map((image, index) => (
            <img key={index} src={image} style={{ width: "100px", margin: "5px" }} />
          ))}
        </div>
      </div>
      <Link to="/" className="btn btn-primary mt-3">
        ← Back to Products
      </Link>
    </div>
  );
};

export default ProductDetails;