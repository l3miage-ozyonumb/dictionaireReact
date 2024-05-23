import React from 'react';
import { useState } from 'react';

export const Header = ({word, setWord}) => {

  const [value, setValue] = useState(""); 


  const handleInputChange = e => {
    setWord(e.target.value);
    //console.log(value);
  }

  const handleSubmit = () => {
    console.log(word);
    setWord("");
  }






    
  return (
    <div className="bg-gray-700">
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold test-center text-white'>Dictionnaire Simple</h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>Trouvez la définition du mot {word}</p>
        <div className='flex item-center justify-center mt-5'>
          <div className='flex border-2 border-gray-200'>
            <input type='text' className='px-4 py-2 w-80' placeholder='Search...' onChange={handleInputChange}/>
            <button className='bg-blue-400 text-white px-4'
            onClick={handleSubmit}>Rechercher</button>
          </div>
        </div>
      </div> 
    </div>
  )
};

export default Header;
