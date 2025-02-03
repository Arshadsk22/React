import { useState } from "react";
const Name = () => {
    const [name, setName] = useState<string>('');
    return(
        <div>
            <input type="text"
             value={name} 
             onChange={(event)=>setName(event.target.value)} />
             <p>Your Name:{name}</p>
        </div>
    )
}
export default Name;