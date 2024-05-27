import './App.css';
import React, { useState } from 'react';
import { Header } from './components/Header';
import Definition from './components/Definition';

//Create context 
//export const InputContext = React.createContext();


function App() {

  const [word, setWord] = useState("");
  const [tralang, setTralang] = useState("");



  return (
    <div className="App">
      <Header word={word} setWord = {setWord} tralang={tralang} setTralang={setTralang}/>
      <Definition word = {word} tralang = {tralang}/>
      </div>
  );
}

export default App;
