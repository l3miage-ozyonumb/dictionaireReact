import React from 'react'

const Definition = ({word}) => {
  return (
    <div>
        <h1 className='text-left font-bold'>La definition de mot : {word} </h1>
        <hr/>

        <p className='text-left mx-auto pb-12 pt-5'>Definition : </p>
        <p className='text-left mx-auto pb-5'>Synonym :</p>
        <p className='text-left mx-auto'>Antonym :</p>
    </div>
  )
}

export default Definition