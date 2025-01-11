import { createContext, useState } from 'react';

// create context
export const Countercontext = createContext(null);

// create provider
export const CounterProvider = (props) => {
    const [count, setCount] = useState(10);
    return (
        <Countercontext.Provider value={{ count, setCount, name: "shubham" }}>
            {props.children}
        </Countercontext.Provider>
    )
}
