import "./styles.css"
import { Form } from './Form'
import { ListItem } from './ListItem'

function App() {

  return (
    <div>
      <ul id="list">
        <ListItem checkedStatus={false}>Checked: FALSE</ListItem>
        <ListItem checkedStatus={true}>Checked: TRUE</ListItem>
      </ul>

      <Form></Form>
    </div>
  );
}

export default App
