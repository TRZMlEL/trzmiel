import React, { useState } from 'react';
import slidingPuzzle from './img/slidingPuzzle.png'
import TicTacToe from './img/TicTacToe.png'
import ZAPCUP from './img/ZAP-CUP.png'
import currencyConverter from './img/currencyConverter.png'
import modernEden from './img/modernEden.png'
import memory from './img/memory.png'

const CodingProjects = () => {
  const [angle, setAngle] = useState(0);

  const rotateCarousel = () => {
    return { transform: `translateZ(-32rem) translateX(-16rem) translateY(-4rem) rotateY(${angle}deg)` };
  };

  const handlePrevClick = () => {
    setAngle(angle + 30);
  };

  const handleNextClick = () => {
    setAngle(angle - 30);
  };

  return (
    
    <div className='scene w-screen h-30rem pl-16rem pr-16rem pt-4rem pb-4rem'>
      <div className='w-full mb-2rem flex items-center justify-center'>
          <h2  className='font-semibold text-3xl text-center' >CODING PROJECTS</h2>
      </div>
      <div className='carousel' style={rotateCarousel()}>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ slidingPuzzle }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Sliding Puzzle</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/SlidingPuzzle/'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/SlidingPuzzle'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ TicTacToe }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Tic Tac Toe</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/TicTacToe_css'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/TicTacToe_css'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ ZAPCUP }/>
            </div>
            <h3 className=' text-1xl font-semibold'>ZAP-CUP</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='http://zapcup.pl'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/ZAP-CUP'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ currencyConverter }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Currency Converter</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/Currency-Converter/'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/Currency-Converter'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ modernEden }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Modern Eden</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/ModernEden/'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/ModernEden'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ memory }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Memory</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/Memory'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/Memory'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ slidingPuzzle }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Sliding Puzzle</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/SlidingPuzzle/'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/SlidingPuzzle'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ TicTacToe }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Tic Tac Toe</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/TicTacToe_css'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/TicTacToe_css'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ ZAPCUP }/>
            </div>
            <h3 className=' text-1xl font-semibold'>ZAP-CUP</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='http://zapcup.pl'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/ZAP-CUP'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ currencyConverter }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Currency Converter</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/Currency-Converter/'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/Currency-Converter'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ modernEden }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Modern Eden</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/ModernEden/'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/ModernEden'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
          <div className='carousel_cell bg-dark rounded-lg border-8 border-color p-1rem flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 border-4 rounded-md border-color mb-1rem'>
              <img className='w-full h-full object-cover' alt='Sliding Puzzle Project' src={ memory }/>
            </div>
            <h3 className=' text-1xl font-semibold'>Memory</h3>
            <p className=' text-sm font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://trzmlel.github.io/Memory'  target='_blank' rel='noopener noreferrer'>Open  --&gt;</a></p>
            <p className=' text-sm text-1xl font-medium hover:underline underline-offset-4 cursor-pointer'><a href='https://github.com/TRZMlEL/Memory'  target='_blank' rel='noopener noreferrer'>Repository --&gt;</a></p>
          </div>
      </div>
      <div className='flex justify-between'>
        <button className='bg-color text-dark text-3xl rounded-lg hover:bg-light translate-y-8rem h-4rem previous-button' onClick={handlePrevClick}>
          &lt;
        </button>
        <button className='bg-color text-dark text-3xl rounded-lg hover:bg-light translate-y-8rem h-4rem next-button' onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default CodingProjects