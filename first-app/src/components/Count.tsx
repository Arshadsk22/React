import { useState ,useEffect} from "react";
import './Count.css';


const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect called");
    });
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default Counter;