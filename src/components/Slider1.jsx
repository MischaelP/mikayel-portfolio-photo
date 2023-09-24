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
        <div className='mx-auto relative flex items-center'>
            <div onClick={prevSlide} className='text-2xl cursor-pointer absolute left-0'>
                &lt; {/* Flèche gauche */}
            </div>
            <img src={slide[currentSlide].url} alt={slide[currentSlide].alt}
                className='w-64 h-auto mx-auto'/>
            <div onClick={nextSlide} className='text-2xl cursor-pointer absolute right-0'>
                &gt; {/* Flèche droite */}
            </div>
        </div>
</>
  )
}

export default Slider1