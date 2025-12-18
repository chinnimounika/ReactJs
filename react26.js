function App() {
  return (
    <Greeting 
      name="Bharath" 
      age={45} 
      occupation="Software Developer"/>
  );
}
function Greeting(props) {
  return (
    <p>
      Hello! I am {props.name}, a {props.age} years old {props.occupation}.
      Nice to meet you!
    </p>
  );
}
export default App;
index.js
import React from "react";
import {createRoot} from "react-dom/client";
import App from"./App";
const root=createRoot(document.getElementById("root"));
root.render(<App/>);

