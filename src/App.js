import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(100);
  let press = () => {
    counter--;
    setcounter(counter);
  };

  return (
    <div>
      <h1>Kaaustubh Application</h1>
      <h1>{counter}</h1>
      <input type="button" value="click" onClick={press} />
    </div>
  );
}
export default App;
