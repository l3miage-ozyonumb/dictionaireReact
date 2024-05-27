import React from 'react'
import {data} from '../data/data'
import {langues} from '../data/langues';

const Definition = ({word, tralang}) => {

  const wordData = data.find(w => w.word === word);

  return (
    <div>
        <h1 className='text-left font-bold'>La definition de mot : {word} </h1>
        <hr />

        <p className='text-left mx-auto pb-5 pt-5'>Definition : {wordData?.definition} </p>
        <p className='text-left mx-auto pb-5'>Synonym : {wordData?.synonym}</p>
        <p className='text-left mx-auto pb-5'>Antonym : {wordData?.antonym}</p>
        <hr/>
        <p className='text-left mx-auto pt-5'> Traduction en {langues[tralang]} est {wordData?.[tralang]} </p>

    </div>
  )
}

export default Definition