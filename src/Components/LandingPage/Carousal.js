import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

var settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Card = ({ value }) => {
  return (
    <div className='w-72 shrink-0 p-4 m-auto bg-white rounded-md shadow-lg'>
      <img src={require(`../../assets/YouTube-Thumbnail.png`)} alt='' />
      <div className='mb-4'>
        <p className='pt-1'>{value}</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
      </div>
    </div>
  );
};
const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const Carousal = () => {
  // const [isModal, setIsModal] = useState(false);

  return (
    <div className='py-28'>
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

      <p className='text-center z-50'>
        Dcommunity combines global reach and AI to deliver your ideal remote
        developers
      </p>
      <div className='relative'>
        <div className='carousal bg-blue-600 w-full py-20 px-8 h-fit mt-14'>
          <Slider {...settings}>
            {items.map((item, idx) => (
              <Card key={idx} value={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
