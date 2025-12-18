function App() {
  return <MySum a={5} b={3}/>;
}
function MySum(props) {
  return (
    <p>
     Addition={props.a+props.b}<br></br>
     Subtraction={props.a-props.b}<br></br>
     Multilication={props.a*props.b}<br></br>
     Division={props.a/props.b}<br></br>
     Modulus={props.a%props.b}<br></br>
     Exponentation={props.a**props.b}<br></br>
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

