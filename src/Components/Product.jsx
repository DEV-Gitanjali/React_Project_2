import React from 'react';
import Button from './Button';

function Product(props) {
  return (
    <div className='w-full py-20  text-white'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-medium'>{props.title}</h1>
        <div className='dets w-1/3'>
          <p className='mb-10'>{props.description}</p>
          <div className='flex items-center gap-10 '>

          {props. live && <Button/> }
          {props. case && <Button title='case study'/> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
