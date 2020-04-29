import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,signIn} from './actions'


function App() {

  const counter= useSelector(state=> state.counter);
  const isLogged= useSelector(state=> state.isLogged);
  const dispatch= useDispatch();


  return (
    <div className="App">
    <h1>Hello </h1>
    {/*  Below I am passing a number through payload that will be used in the reducer */} 
    <button onClick={()=>dispatch(increment(5)) }>+</button>
    <button onClick={()=>dispatch(decrement()) }>-</button>
    <span>{counter}</span>

    <br/>
    <button onClick={()=>dispatch(signIn()) }>Hide or Reveal Valuable Information</button>
    { 
      isLogged ? <h3>Valuable information I shouldnt see</h3> : <h3> Sorry info not available</h3>
    }

    </div>
  );
}

export default App;
