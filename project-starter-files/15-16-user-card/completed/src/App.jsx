import userJSON from './user.json'
import UserCard from './UserCard'

function App() {
  const { name, age, phoneNumber, address } = userJSON;

  return (
    <UserCard name={name}
      age={age}
      phoneNumber={phoneNumber}
      address={address} />
  )
}

export default App
