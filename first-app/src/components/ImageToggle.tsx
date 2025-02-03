import { useState } from "react";
import imageOn from '../assets/On.jpg';
import imageOff from '../assets/Off.jpg';

const ToggleImage = () => {
    const [isOn, setToggle] = useState<boolean>(false);

    return (
        <div>
            <img 
                src={isOn ? imageOn : imageOff} 
                 onClick={() => setToggle(!isOn)} 
            />
        </div>
    );
}

export default ToggleImage;