import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let inputRef=useRef()
  let dispatch=useDispatch()
  let storeObject= useSelector((store)=>{return store;})
  return (
    <div className="App">
      <div>
        <h1>REDUX</h1>
        <form>
          <div className="buttonContainer">
          <input ref={inputRef}></input>
          <button type="button" onClick={()=>{ dispatch({type:"addActor",data:inputRef.current.value})}}> Actors</button>
          <button type="button" onClick={()=>{dispatch({type:"addCricketers",data:inputRef.current.value})}}> Cricketers</button>
          <button type="button" onClick={()=>{dispatch({type:"addPoliticians",data:inputRef.current.value})}}> Politicians</button>
          </div>
          <h2><span>Actors:</span>{storeObject.actors}</h2>
          <h2><span>Cricketers:</span>{storeObject.cricketers}</h2>
          <h2> <span>Politicians:</span>{storeObject.politicians}</h2>
        </form>

      </div>
    </div>
  );
}

export default App;
