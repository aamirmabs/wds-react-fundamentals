import { useState } from "react"

function App() {

  const [name, setName] = useState("Aamir");
  const [age, setAge] = useState(36);

  const handleIncrement = () => {
    setAge(oldAge => oldAge + 1)
  }
  const handleDecrement = () => {
    setAge(oldAge => oldAge - 1)
  }

  return (
    <>
      Hi, my name is {name} and I am {age} years old.
      <div>
        <button onClick={handleIncrement}>+</button>
        {age}
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  )
}

export default App
