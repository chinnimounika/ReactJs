NameList.js
import React from "react";
const NameList=()=>{
    const names=['Alice','Bob','Charlie','David'];
    return(
        <ul>
            {names.map((name,index)=>(
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
};
export default NameList;

App.js
import React from "react";
import NameList from './NameList';
const App=()=>{
  return(
    <div>
      <h1>Name List</h1>
      <NameList/>
    </div>
  );
};
export default App;
