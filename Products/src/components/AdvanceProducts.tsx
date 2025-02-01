import './Products.css';
interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
interface propProducts {
    product: Products[];
}
function Products(prop: propProducts) {
    return (
        <div className="container py-5">
            <h1>List of the Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {prop.product.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} style={{ objectFit: 'cover', height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><strong>Category:</strong> {product.category}</p>
                                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                                <p className="card-text"><strong>Rating:</strong> {product.rating?.rate}(Reviews:{product.rating?.count})</p>
                                <a target='blank' href="https://www.amazon.in" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Products;