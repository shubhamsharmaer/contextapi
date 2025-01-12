import Item from "./components/item"
import Cart from "./components/Cart"
import './App.css'

function App() {

  return (
    <>
      <div className="Parent">
        <h1>Welcome to E-Cart</h1>
      <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center",flexWrap: "wrap", gap: "10px"}}>
        <Item name="Laptop" price={5000}/>
        <Item name="Mobile" price={6500}/>
        <Item name="Xbox" price={2607}/>
        <Item name="Watch" price={3020}/>
      </div>
      <div className="Cart">
        <h1>Cart Items:</h1>
        <Cart />
      </div>
      </div>
      
    </>
  )
}

export default App
