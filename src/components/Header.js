import React from 'react';
import { useState } from 'react';

export const Header = () => {

  const [value, setValue] = useState(""); 


  const handleInputChange = e => {
    setValue(e.target.value);
    //console.log(value);
  }

  const handleSubmit = () => {

    setValue("");
  }

    const handleInputKeyDown = e => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    }





    
  return (
    <div className="bg-gray-700">
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold test-center text-white'>Dictionnaire Simple</h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>Trouvez la définition d'un mot</p>
        <div className='flex item-center justify-center mt-5'>
          <div className='flex border-2 border-gray-200'>
            <input type='text' className='px-4 py-2 w-80' placeholder='Search...' onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
            <button className='bg-blue-400 text-white px-4'
            onClick={handleSubmit}>Rechercher</button>
          </div>
        </div>
      </div> 
    </div>
  )
}
