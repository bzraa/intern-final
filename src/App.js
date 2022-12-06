import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [a, Seta] = useState();
  const [b, Setb] = useState();

  useEffect(() => {
    console.log(a);
    console.log(b);
  }, [a][b]);

  return (
      <div>
        <input onChange={e => Seta(Number(e.target.value))} placeholder="Number 1">
        </input>
        <input onChange={e => Setb(Number(e.target.value))} placeholder="Number 2">
        </input>
        <div>{!a ? "Number 1" : a} + {!b ? "Number 2" : b} = {(!a) || (!b) ? "Summation" : (a + b)}</div>
      </div>
  );
}

export default App;
