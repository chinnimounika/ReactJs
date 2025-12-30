ItemList.js
import React from "react";
const ItemList=()=>{
    const items=[
    {id:1,name:'Apple'},{id:2,name:'Banana'},{id:3,name:'Cherry'}];
    return(
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}</li>
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
