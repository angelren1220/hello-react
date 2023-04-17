import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("");
  const hello = (!name) ? "" : "Hello";

  const reset = () => {
    setName("");
  };

  return (
    <main>
      <input
        placeholder='Type your name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button text="Reset" onClick={reset}/>
      <h1>{hello} {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
