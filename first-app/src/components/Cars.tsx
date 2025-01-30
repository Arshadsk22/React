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
            <table className='table table-bordered table-hover table-striped'>
                <thead className='strong em'>
                    <tr>
                        <th>Car Brand</th>
                        <th>Car Model</th>
                        <th>Making Year</th>
                        <th>Car Color</th>
                    </tr>
                </thead>
                <tbody className='table-striped '>
                    {jdmCars.map((car) => (
                        <tr>
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