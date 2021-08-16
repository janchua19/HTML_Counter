import { useState } from "react";
import "../styles/Counter.css";

function Counter(){
    const [number, setNumber] = useState(0);

    function increase(){
        setNumber(number + 1);
    }
    function decrease(){
        setNumber(number - 1);
    }

    return(
        <div>
            <button onClick={increase} name ="plus">+</button>
            <span>{number}</span>
            <button onClick={decrease} name ="minus">-</button>
        </div>
    );
}

export default Counter;