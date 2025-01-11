import React from 'react'
import Counter from "./components/Counter";
import { useContext } from "react";
import { Countercontext } from "./contexts/Countercontext";

function App() {
  // const [count, setCount] = React.useState(0)
  const counterState = useContext(Countercontext);
  return (
    <>
      <div>
        <h1>Count is {counterState.count}</h1>
        <Counter />
      </div>
    </>
  )
}

export default App
