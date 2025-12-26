ItemList.js
import React from "react";
const ItemList=()=>{
    const items=['Apple','Banana','Cherry'];
    return(
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
export default ItemList;

App.js
import React from "react";
import ItemList from './ItemList';
const App=()=>{
  return(
    <div>
      <h1>Item List</h1>
      <ItemList/>
    </div>
  );
};
export default App;
