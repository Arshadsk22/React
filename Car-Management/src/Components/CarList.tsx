import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
interface Car {
    id: string;
    brand: string;
    model: string;
    price: number;
}
function CarList() {
    const API_URL = 'https://67a97dbe6e9548e44fc3c58c.mockapi.io/Cars';
    const [carList, setCarList] = useState<Car[]>([]);
    const fetchCars = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCarList(data);
    }
    const deleteCar = async (id: string) => {
        const updatedCars = carList.filter((car) => car.id != id);
        setCarList(updatedCars);
    };
    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <div className="container">
            <h2>Car List</h2>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {carList.map((car) => (
                        <tr key={car.id}>
                            <th scope="row">{car.id}</th>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.price}</td>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteCar(car.id)}>❌Delete</button>
                            <Link to={`/editCar/${car.id}`} className="btn btn-warning btn-sm m-2">✏️Edit</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CarList;