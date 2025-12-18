import React,{useState} from "react";
const Counter=()=>{
  const[count,setCount]=useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      {/*update state by calling setCount*/}
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
};
export default Counter;=
