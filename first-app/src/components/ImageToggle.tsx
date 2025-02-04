import { useState } from "react";
import imageOn from '../assets/On.jpg';
import imageOff from '../assets/Off.jpg';
import './ImageToggle.css';

const ToggleImage = () => {
    const [isOn, setToggle] = useState<boolean>(false);

    return (
        <div>
            <h3>Status:{isOn?'On':'Off'}</h3>
            <img 
                src={isOn ? imageOn : imageOff} 
                 onClick={() => setToggle(!isOn)} 
            />
        </div>
    );
}

export default ToggleImage;