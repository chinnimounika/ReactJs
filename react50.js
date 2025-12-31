import React, {useCallback} from "react";
const ScrollToElement=()=>{
  let myRef=null;
  const setRef=useCallback(element=>{
    if(element){
      myRef=element;
    }
  },[]);
  const handleClick=()=>{
    if(myRef){
    myRef.scrollIntoView({behavior:'smooth'});
    }
  };
  return(
    <div>
      <button onClick={handleClick}>Scroll to Element</button>
      <div style={{height:'1500px'}}></div>
      <div ref={setRef} style={{height:'100px',background:'Yellow'}}>
        Scroll to this element
      </div>
    </div>
  );
};
export default ScrollToElement;
