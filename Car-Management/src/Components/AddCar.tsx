import { useState } from "react";
function AddCar() {
    const API_URL = 'https://67a97dbe6e9548e44fc3c58c.mockapi.io/Cars';
    const [brand, setBrand] = useState('');
    const [brandError, setBrandError] = useState('');
    const [model, setModel] = useState('');
    const [modelError, setModelError] = useState('');
    const [price, setPrice] = useState('');
    const [priceError, setPriceError] = useState('');
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isFormValid()) {
            addCar();
            setMessage('');
        }
        else {
            setMessage("Please fix the validation errors");
        }
    };

    const isFormValid = () => {
        let validForm: boolean = true;
        if (brand.trim() == '') {
            setBrandError("Brand Name is required");
            validForm = false;
        }
        else {
            setBrandError('');
        }

        if (model.trim() == '') {
            setModelError("Model Name is required");
            validForm = false;
        }
        else {
            setModelError('');
        }

        if (price.trim() == '') {
            setPriceError("Price is required");
            validForm = false;
        }
        else {
            setPriceError('');
        }

        return validForm;
    }

    const addCar = async () => {
        let requestBody = { brand, model, price };
        let requestBodyJSON = JSON.stringify(requestBody);

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBodyJSON
        };

        const response = await fetch(API_URL, request);
        if (response.ok) {
            console.log("Car added..");
            setBrand('');
            setModel('');
            setPrice('');
            setMessage('Car Added Successfully');
        }
    };
    return (
        <div>
            {message &&
                <div className="alert alert-success">{message}</div>
            }
            <h2>Add Car</h2>
            <form className="border p-3 shadow-lg rounded form-control" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2">
                        <label htmlFor="titleTextBox" className="text-secondary">
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
                            name="titleTextBox"
                            id="titleTextBox"
                            value={brand}
                            className="form-control mb-4"
                            placeholder="Enter Brand Name"
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="descriptiontextBox" className="text-secondary">
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
                            name="descriptiontextBox"
                            id="descriptiontextBox"
                            value={model}
                            className="form-control mb-4"
                            placeholder="Enter Model Name"
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="durationBox" className="text-secondary">
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
                            name="durationBox"
                            id="durationBox"
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
export default AddCar