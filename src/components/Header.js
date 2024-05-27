import React from 'react';

export const Header = ({word, setWord, tralang, setTralang}) => {



  const handleInputChange = e => {
    setWord(e.target.value);
    //console.log(value);
  }

  const handleSelectChange = e => {
    setTralang(e.target.value);
  }

  const handleSubmit = () => {
    console.log(word);
    setWord("");
  }


  console.log("Rendered again"); //this is just for me to see when i click on submit the component is re-rendered

  console.log("tralang = " + tralang);

    
  return (
    <div className="bg-gray-700">
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold test-center text-white'>Dictionnaire Simple</h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>Trouvez la définition et la traduction du mot {word}</p>
        <div className='flex item-center justify-center mt-5'>
          <div className='flex border-3 border-gray-200'>
            <input type='text' className='px-4 py-2 w-80' placeholder='Search for a word in english...' onChange={handleInputChange}/>
            <form>
              <label>
                <select className='flex bg-blue-500 text-white py-3 px-4 appearence-none'onChange={handleSelectChange}>
                  <option value="">Select a language</option>
                  <option value="fr">Français</option>
                  <option value="tr">Turc</option>
                </select>
              </label>
            </form>
            <button className='bg-blue-400 text-white px-4'
            onClick={handleSubmit}>Rechercher</button>
            
          </div>
        </div>
      </div> 
    </div>
  )
};

export default Header;
