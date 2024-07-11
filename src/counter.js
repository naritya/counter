import React, {useState} from 'react';

const Counter = () => {
    const[count, setCount]=useState(0);

    const Increment=()=>{
        setCount((prev)=>prev+1);
    }

    const Decrement=()=>{
        setCount((prev)=>prev-1);
    }

  return (
   
    <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick= {Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

    </div>
  )
}

export default Counter