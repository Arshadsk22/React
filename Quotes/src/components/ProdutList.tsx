import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchProduct, setSearchProduct] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError("Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Ex: Red nail polish etc.."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Link to={`/products/${product.id}`} className="text-decoration-none">
                <div className="card h-100">
                  <img src={product.thumbnail} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <p className="btn btn-primary">View Details</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="alert alert-danger d-flex justify-content-center" role="alert">
            <div>
              <h4 className="alert-heading">Product Not Found</h4>
              <p>Please search the products which are available on the Product List</p>
              <hr />
              <p className="mb-0"><strong>Note:</strong> Always check the Product List before searching for the products :)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;