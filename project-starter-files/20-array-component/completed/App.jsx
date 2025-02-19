import { useState } from "react"

function App() {

  const initialArray = ["A", "B", "C", "D", "B", "E"];
  const [array, setArray] = useState(initialArray);

  const handleRemoveFromStart = () => {
    setArray(oldArray => oldArray.slice(1));
  }

  const handleRemoveFromEnd = () => {
    setArray(oldArray => oldArray.slice(0, -1));
  }

  const handleClearArray = () => {
    setArray([]);
  }

  const handleRemoveBs = () => {
    setArray(oldArray => oldArray.filter(item => item !== "B"));
  }

  const handleAddEndBs = () => {
    setArray(old => [...old, "B"])
  }

  const handleAddStartBs = () => {
    setArray(old => ["B", ...old])
  }

  const handleReset = () => {
    setArray(initialArray)
  }

  const handleConvertAtoH = () => {
    setArray(currentArray => {
      const newArray = currentArray.map(
        element => {
          if (element === "A") { return "H"; }
          else { return element; }
        }
      );
      return newArray;
    })
  }

  return (
    <div>
      <div>
        <h1>Array Contents</h1>
        {array.join(",")}
        <br />
        <button onClick={handleRemoveFromStart}>Remove from start</button>
        <br />
        <button onClick={handleRemoveFromEnd}>Remove from end</button>
        <br />
        <button onClick={handleClearArray}>Clear Array</button>
        <br />
        <button onClick={handleRemoveBs}>Remove All B</button>
        <br />
        <button onClick={handleAddEndBs}>Add B to end</button>
        <br />
        <button onClick={handleAddStartBs}>Add B to Start</button>
        <br />
        <button onClick={handleReset}>RESET</button>
        <br />
        <button onClick={handleConvertAtoH}>Change A to H</button>
      </div>
    </div>
  )
}

export default App
