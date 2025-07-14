import React, { useState } from 'react'

function Counter({initialValue}) {
    let [count, setcount] = useState(initialValue);
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setcount(count + 1)}> increase </button>
        <button onClick={() => setcount(count - 1)}> decrease </button>
      
    </div>
  )
}

export default Counter
