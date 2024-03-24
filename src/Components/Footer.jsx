import React from 'react';

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex   text-white gap-32'>
        <div className='basis-1/2'>
            <h1 className='text-[11.5rem] font-semibold tracking-tight leading-none '>refokus.</h1>
        </div>


        <div className='basis-1/2  gap-6 flex '>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-600 capitalize '>socials</h4>
                {["instagram" , "twitter (x?)" , "LinkedIn" ].map((item , index)=><a  className='block mt-2 text-zinc-600 capitalize'>{item}</a>)  }
            </div>

            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-600 capitalize '>socials</h4>
                {["instagram" , "twitter (x?)" , "LinkedIn" ].map((item , index)=><a  className='block mt-2 text-zinc-600 capitalize'>{item}</a>)  }
            </div>

       <div>
        <p className='basis-1/2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique magni consectetur totam assumenda dignissimos voluptatem inventore illum.</p>
       </div>


        </div>
      </div>
    </div>
  );
}

export default Footer;
