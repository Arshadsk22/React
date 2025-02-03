import { useState } from "react";

const Toggle = () => {
    const[isToggleOn,setToggle]=useState<boolean>(false);
    return(
        <div>
            <h3>Toggle:{isToggleOn?'On':'Off'}</h3>
            <button onClick={()=>setToggle(!isToggleOn)}>Toggle</button>

        </div>
    )
}
export default Toggle;