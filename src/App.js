import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Dictionnaire, Header } from './components/Header';

//Create context 
export const InputContext = React.createContext();


function App() {

  const [inputValue, setInputValue] = useState("");

  const value = { 
    inputValue, 
    setInputValue //Ayni isim olunca InputValue: inputValue yazmana gerek yok
  }
  return (
    <InputContext.Provider value={value}>
    <div className="App">
      <Header />
    </div>
    </InputContext.Provider>
  );
}

export default App;
