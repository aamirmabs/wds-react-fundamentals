import { useState, useEffect } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  // for every re-render - no array used
  useEffect(() => {
    console.log("Re-Render");
  })

  // when component mounts - use empty array
  useEffect(() => {
    console.log("Hi");

    return () => {
      console.log("Bye");
    };
  }, [])

  // when a state value changes - use state variables in array
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old.`);
  }, [name, age])

  useEffect(() => {
    document.title = name;

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}.`);
    }, 1000);
  });

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
