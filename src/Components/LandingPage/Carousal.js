import React from 'react';

const Card = () => {
  return (
    <div className=' shrink-0 p-6 w-50 m-auto bg-white rounded-md shadow-lg'>
      <img src={require(`../../assets/YouTube-Thumbnail.png`)} alt='' />
      <div>
        <p className='pt-3'>Lorem ipsum</p>
        <p className='pt-3'>Lorem ipsum</p>
        <p className='pt-3'>Lorem ipsum</p>
      </div>
    </div>
  );
};
const items = [1, 2, 3, 4, 5, 6];

const Carousal = () => {
  return (
    <div className='py-20'>
      <h1 className='font-bold text-4xl text-center'>
        Hire The Best Developer
      </h1>

      <div className='flex flex-col justify-center items-center'>
        <svg
          width='259'
          height='19'
          viewBox='0 0 379 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 10.2934C138.959 25.4151 239.791 -19.9093 378 14'
            stroke='#0066FF'
          />
          <path
            d='M44 13C156.598 27.9175 222.197 -15.3926 335 18.0587'
            stroke='#0066FF'
          />
        </svg>
      </div>

      <p className='text-center'>
        Dcommunity combines global reach and AI to deliver your ideal remote
        developers
      </p>
      <div>
        <div className='bg-blue-600 w-full py-6 h-fit mt-20 flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-hide'>
          {items.map((item) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
