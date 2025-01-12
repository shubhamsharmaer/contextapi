import React from "react";
// import { useContext } from "react";
// import { Cartcontext } from "../contexts/Cartcontext";
import { useCart } from "../contexts/Cartcontext";

const Cart = () => {
    const cart = useCart();
    return (
        <>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",flexWrap: "wrap", gap: "10px"}}>
                {/* display the cart items */}
                {cart && cart.itemList.map((item) => {
                    return (
                        <>
                            <h2 style={{listStyle: "none"}}>
                                {item.name} : <span style={{color: "lightgreen"}}>${item.price}</span>
                            </h2>
                            <button onClick={() => cart.setItemList(cart.itemList.filter((i) => i.name !== item.name))}>Remove</button>
                        </>
                    )
                })}
                
            </div>

            <div>
                {/* display the total amount */}
                <h2>Total Bill: <span style={{color: "lightgreen"}}>${cart.itemList.reduce((a, b) => a + b.price, 0)}</span></h2>
                {cart && cart.itemList.length > 0 && (
                        <button stylre={{marginLeft: "10px"}} onClick={() => cart.setItemList([])}>Clear Cart</button>
                )}
            </div>
        </>
    )
}

export default Cart