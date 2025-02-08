import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import ProductList from './components/ProdutList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <Router>
        <div className="container mt-4">
          <h1 className="text-center">Products</h1>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;