import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import img16 from '../assets/img_giostra/img16.jpg';
import img15 from '../assets/img_giostra/img15.gif';
import img14 from "../assets/img_giostra/img14.gif";
import img13 from "../assets/img_giostra/img13.gif";
import img12 from "../assets/img_giostra/img12.jpg";
import img11 from "../assets/img_giostra/img11.jpg";
import img10 from "../assets/img_giostra/img10.gif";
import img9  from "../assets/img_giostra/img9.gif";
import img8  from "../assets/img_giostra/img8.gif";
import img7  from "../assets/img_giostra/img7.jpg";
import img6  from "../assets/img_giostra/img6.jpg";
import img5  from "../assets/img_giostra/img5.jpg";
import img4  from "../assets/img_giostra/img4.jpg";
import img3  from "../assets/img_giostra/img3.jpg";
import img2  from "../assets/img_giostra/img2.jpg";
import img1  from "../assets/img_giostra/img1.jpg";

const images = [
  img16,
  img15,
  img14,
  img13,
  img12,
  img11,
  img10,
  img9,
  img8,
  img7,
  img6,
  img5,
  img4,
  img3,
  img2,
  img1
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateX, setAnimateX] = useState(0);
  const [imageSize, setImageSize] = useState(64); // Dimensione base per mobile

  useEffect(() => {
    const handleResize = () => {
      setImageSize(window.innerWidth < 768 ? 64 : 80);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageBlockWidth = imageSize + 14; // Larghezza immagine + margin

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateX(-imageBlockWidth);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageBlockWidth]);

  const handleAnimationComplete = () => {
    if (animateX !== 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setAnimateX(0);
    }
  };

  const getIndex = (offset) => (currentIndex + offset + images.length) % images.length;

  return (
    <div
    style={{position: 'absolute',
      left: '5%',
      top: '32%'
    }} 
    className="w-full overflow-hidden relative py-8">
      <motion.div
        className="flex relative"
        style={{
          left: `calc(50% - ${imageBlockWidth * 2}px)`
        }}
        animate={{ x: animateX }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        onAnimationComplete={handleAnimationComplete}
      >
        {[-2, -1, 0, 1, 2].map((offset) => {
          const isCenter = offset === 0;
          return (
            <div 
              key={offset}
              className={`transition-all duration-300 mx-1.5 ${isCenter ? 'z-10' : 'z-0'}`}
              style={{
                width: `${imageSize}px`,
                margin: '0 3px'
              }}
            >
              <motion.div
                alt={`Slide ${offset}`}
                className="w-full object-cover rounded-lg shadow-sm"
                style={{
                  height: isCenter ? `${imageSize * 1.4}px` : `${imageSize}px`,
                  opacity: isCenter ? 1 : 0.2 + Math.abs(offset * 0.3),
                  transform: isCenter ? 'translateY(-10%)' : 'none',
                  borderRadius: '15px',
                  backgroundImage: `url(${images[getIndex(offset)]})`,
                  backgroundSize: "contain", // o "100% 100%" per un controllo preciso
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          );
        })}
      </motion.div>

      {/* Overlay responsive */}
      <div className="absolute inset-0 flex justify-between pointer-events-none">
        <div className="w-12 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="w-12 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </div>
  );
}