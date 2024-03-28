import { useState } from "react"
function Counter() {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(curr =>
            {
                return curr + 1
            })
    }
    const decrement = () => {
        if(counter > 0){
        setCounter(curr =>
            {
                return curr - 1
            })
    }
}
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={increment}>Increments </button>
            <button onClick={decrement}>Decrement  </button>
        </div>
    )
}

export default Counter