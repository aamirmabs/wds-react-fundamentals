export function NameFunc({ name, age = 30, isProgrammer, children }) {

  console.log("isProgrammer", isProgrammer);

  return (
    <div>
      <span>{name}</span>: {age}
      <div>
        <strong>{children}</strong>
      </div>
    </div>
  )
}
