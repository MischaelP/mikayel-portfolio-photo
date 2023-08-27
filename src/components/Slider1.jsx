import React from 'react'
import { useState } from 'react';
import img1 from '../img/gallery/fashion1.jpg';

function Slider1() {
    const slide = [
        {   
            id : 1,
            url : ('../src/img/gallery/fashion1.jpg'),
            alt : "Duo"
        },
        {   
            id : 2,
            url : ('../src/img/gallery/fashion2.jpg'),
            alt : "Thalia"
        },
        {   
            id : 3,
            url : ('../src/img/gallery/fashion3.jpg'),
            alt : "Alice"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    // Le modulo slide permet de creer une boucle infinie
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slide.length);
      };
    
    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slide.length) % slide.length);
      };

  return (
    <>
        <div className='max-w-[500px] mx-auto relative'>
           <img src={slide[currentSlide].url} alt={slide[currentSlide].alt} className='h-auto' />
           <div className='absolute top-1/2 transform -translate-y-1/2 left-0'>
            <button onClick={prevSlide} className='px-4 py-2 mr-2 bg-gray-500 text-white'>
            Previous
            </button>
            <button onClick={nextSlide} className='px-4 py-2 bg-gray-500 text-white'>
            Next
            </button>
      </div>
        </div>
    </>
  )
}

export default Slider1