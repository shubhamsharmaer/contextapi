import { useContext } from "react";
import { Countercontext } from "../contexts/Countercontext";
import React from "react";

export function Counter() {
    const counterState = useContext(Countercontext);
    console.log(counterState);
    return (
        <>  
            <button onClick={() => {counterState.setCount(counterState.count + 1)}} >Increment</button>
            <button onClick={() => {counterState.setCount(counterState.count - 1)}}>Decrement</button>
        </>
    )
}

export default Counter