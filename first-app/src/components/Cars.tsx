import './Cars.css';

interface Props {
    items: string[];
    title: string;
}

function Vehicles(props: Props) {
    return (
        <div className="vehicles">
            <h1 className="title">{props.title}</h1>
            <ul className="list-group">
                {props.items.map((car) => (
                    <li className="list-group-item">{car}</li>
                ))}
            </ul>
        </div>
    );
}

export default Vehicles;