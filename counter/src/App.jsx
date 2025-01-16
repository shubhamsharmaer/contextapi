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
        <h1>Current Count &#123; {counterState.count} &#125;</h1>
        <Counter />
      </div>
    </>
  )
}

export default App
