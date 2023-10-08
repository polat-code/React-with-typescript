import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const onClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {/*<ListGroup items={items} heading="Cities" onSelectItem={handSelectItem} /> */}
      {alertVisible && <Alert onClose={onClose}>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button>
    </div>
  );
}

export default App;
