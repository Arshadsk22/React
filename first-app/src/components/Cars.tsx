import './Cars.css';

function Car() {
    const jdmCars = [
        { make: 'Nissan', model: 'Skyline GT-R', year: 1999, color: 'Blue' },
        { make: 'Toyota', model: 'Supra', year: 1998, color: 'Red' },
        { make: 'Mazda', model: 'RX-7', year: 1995, color: 'Black' },
        { make: 'Honda', model: 'NSX', year: 1991, color: 'White' },
        { make: 'Subaru', model: 'Impreza WRX', year: 2004, color: 'Gray' }
    ];

    return (
        <div>
            <table>               
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {jdmCars.map((car, index) => (
                        <tr key={index}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Car;