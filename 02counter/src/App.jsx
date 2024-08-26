import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(5);
const increase=()=>{
  if(counter<20){
  setCounter(counter+1);
  }

}
const decrease=()=>{
  if(counter>0){
    setCounter(counter-1);
  }
}
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increase}>Increment</button>
      <br />
      <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default App
