import React, { useRef, useEffect } from 'react';
import Building from './img/_TRZ9137-Poprawione-Szum.jpg';
import Stars from './img/Gwiazdy.jpg';
import WildTran from './img/_TRZ8462.jpg';

function Photos() {


  return (
    <div className='bg-color w-screen mt-6rem flex items-center justify-center pt-4rem flex-col'>
        <div className='w-full mb-2rem flex items-center justify-center'>
            <h2 className='font-semibold text-3xl'>PHOTOS</h2>
        </div>
        <div className='h-auto flex flex-wrap justify-center gap-1rem mb-4rem'>
          <img className="h-20rem w-27rem object-cover" src={ Building } draggable="false" alt="Building" />
          <img className="h-20rem w-27rem object-cover" src={ Stars } draggable="false" alt="Stars" />
          <img className="h-20rem w-27rem object-cover" src={ WildTran } draggable="false" alt="WildTran" />
          <img className="h-20rem w-27rem object-cover" src={ Building } draggable="false" alt="Building" />
          <img className="h-20rem w-27rem object-cover" src={ Stars } draggable="false" alt="Stars" />
          <img className="h-20rem w-27rem object-cover" src={ WildTran } draggable="false" alt="WildTran" />
          <img className="h-20rem w-27rem object-cover" src={ Building } draggable="false" alt="Building" />
          <img className="h-20rem w-27rem object-cover" src={ Stars } draggable="false" alt="Stars" />
          <img className="h-20rem w-27rem object-cover" src={ WildTran } draggable="false" alt="WildTran" />
        </div>
    </div>
  );
}

export default Photos;