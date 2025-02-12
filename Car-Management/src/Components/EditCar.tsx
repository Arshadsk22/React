import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditCar() {
    const API_URL = 'https://67a97dbe6e9548e44fc3c58c.mockapi.io/Cars';
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [brand, setBrand] = useState('');
    const [brandError, setBrandError] = useState('');
    const [model, setModel] = useState('');
    const [modelError, setModelError] = useState('');
    const [price, setPrice] = useState('');
    const [priceError, setPriceError] = useState('');
    const [message, setMessage] = useState("");

    const fetchCar = async () => {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setBrand(data.brand);
        setModel(data.model);
        setPrice(data.price);
    };

    useEffect(() => {
        fetchCar();
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isFormValid()) {
            editCar();
            setMessage('');
        } else {
            setMessage("Please fix the validation errors");
        }
    };

    const isFormValid = () => {
        let validForm: boolean = true;
        if (brand.trim() === '') {
            setBrandError("Brand Name is required");
            validForm = false;
        } else {
            setBrandError('');
        }

        if (model.trim() === '') {
            setModelError("Model Name is required");
            validForm = false;
        } else {
            setModelError('');
        }

        return validForm;
    };

    const editCar = async () => {
        let requestBody = { brand, model, price };
        let requestBodyJSON = JSON.stringify(requestBody);

        const request = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: requestBodyJSON,
        };

        const response = await fetch(`${API_URL}/${id}`, request);
        if (response.ok) {
            console.log("Car Detail Updated Successfully");
            setBrand('');
            setModel('');
            setPrice('');
            setMessage('Car Detail Updated Successfully');
            setTimeout(() => navigate('/'), 2000);
        }
    };

    return (
        <div>
            {message &&
                <div className="alert alert-success">{message}</div>
            }
            <h2>Edit Car</h2>
            <form className="border p-3 shadow-lg rounded form-control" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2">
                        <label htmlFor="brandTextBox" className="text-secondary">
                            Brand{brandError ? (
                                <p className="text-danger small"> {brandError} </p>
                            ) : (
                                <p></p>
                            )}
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="brandTextBox"
                            id="brandTextBox"
                            value={brand}
                            className="form-control mb-4"
                            placeholder="Enter Brand Name"
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="modelTextBox" className="text-secondary">
                            Model{modelError ? (
                                <p className="text-danger small"> {modelError} </p>
                            ) : (
                                <p></p>
                            )}
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="modelTextBox"
                            id="modelTextBox"
                            value={model}
                            className="form-control mb-4"
                            placeholder="Enter Model Name"
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="priceTextBox" className="text-secondary">
                            Price{priceError ? (
                                <p className="text-danger small"> {priceError} </p>
                            ) : (
                                <p></p>
                            )}
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="priceTextBox"
                            id="priceTextBox"
                            value={price}
                            className="form-control mb-4"
                            placeholder="Enter Price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditCar;