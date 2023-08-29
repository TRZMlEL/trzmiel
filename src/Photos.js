import React from 'react'
import Building from './img/_TRZ9137-Poprawione-Szum.jpg'
import Start from './img/Gwiazdy.jpg'
import WildTrain from './img/_TRZ8462.jpg'

function photos() {
  return (
    <div className='bg-color w-screen mt-6rem flex items-center justify-center pt-4rem flex-col'>
        <div className='w-full mb-2rem flex items-center justify-center'>
            <h2 className='font-semibold text-3xl'>PHOTOS</h2>
        </div>
        <div className='h-25rem flex items-center justify-center gap-1rem md-4rem'>
            <img className='photo' alt='Building with balkons during golden hour' src={ Building } />
            <img className='photo' alt='Long exposition of night sky' src={ Start } />
            <img className='photo' alt='Train in wild forest' src={ WildTrain } />
            <img className='photo' alt='Building with balkons during golden hour' src={ Building } />
            <img className='photo' alt='Long exposition of night sky' src={ Start } />
            <img className='photo' alt='Train in wild forest' src={ WildTrain } />
        </div>
    </div>
  )
}

export default photos