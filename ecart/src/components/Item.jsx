import React from "react";
// import { useContext } from "react";
// import { Cartcontext } from "../contexts/Cartcontext";
import { useCart } from "../contexts/Cartcontext";

const Item = (props) => {
    const cart = useCart();
    function handleAddToCart() {
        cart.setItemList([...cart.itemList, 
            {name: props.name, price: props.price}
        ])
        console.log(cart); 
    }
    return (
        <>
            <h2>{props.name}:  <span style={{ color: "red" }}> ${props.price}</span></h2> 
            <button onClick={handleAddToCart}>Add to Cart</button>
        </>
    )
}

export default Item