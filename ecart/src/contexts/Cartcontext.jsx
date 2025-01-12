// import createContext
import { createContext, useState, useContext } from "react";

// Create context
export const Cartcontext = createContext(null);

// Optimized approch --> making custome hook for useContext 
export const useCart = () => {
    return useContext(Cartcontext);
}
// Create provider
export const CartProvider = (props) => {
    // setting up the array state for item list
    const [itemList, setItemList] = useState([]);
    return (
        <Cartcontext.Provider value = {{itemList, setItemList}}>
            {props.children}
        </Cartcontext.Provider>
    )
}
