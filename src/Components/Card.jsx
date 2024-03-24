import React from 'react';
import { LuArrowRight } from "react-icons/lu";

function Card({width , start , para}) {
  return (
<div className= {`bg-zinc-800 p-5 rounded-xl ${width} min-h-60`}>
    <div>

      <div className='w-full flex justify-between items-center'>
        <h3>one heading</h3>
        <LuArrowRight/>
      </div>
       <h1 className='text-3xl font-medium mt-5  '>Whatever heading</h1>


    </div>  

    <div className='down w-full '>
        {
             start === true && (
                <>
                     <h1 className='text-6xl font-semibold tracking-tight leading-none  '> start a project</h1>
                     <button className='rounded-full mt-5 py-2 px-5 border-[1px]  border-zinc '>Contact Us</button>

                </>
             ) 
        }

        {para  &&(

       <p className='text-sm text-zinc-500 font-medium  '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        ) }
    </div>   
</div>
  );

}

export default Card;
