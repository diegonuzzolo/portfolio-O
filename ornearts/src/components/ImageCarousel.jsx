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
  const [imageSize, setImageSize] = useState({ width: 150, height: 120 });
  
  // Aggiunta della definizione di isAnimating
  const isAnimating = animateX !== 0;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setImageSize({
        width: mobile ? window.innerWidth * 0.3 : 150,
        height: mobile ? window.innerWidth * 0.24 : 120
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageBlockWidth = imageSize.width + 20;

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

  const centerVariants = {
    inactive: { top: '-15%', height: `${imageSize.height * 1.25}px`, opacity: 1 },
    active: { top: '0%', height: `${imageSize.height}px`, opacity: 0.7 }
  };

  const rightVariants = {
    inactive: { top: '0%', height: `${imageSize.height}px`, opacity: 0.7 },
    active: { top: '-15%', height: `${imageSize.height * 1.25}px`, opacity: 1 }
  };

  return (
    <div
    style={{position: 'absolute',
      bottom: '50vh',
      right: '30vh'
    }} 
    className="w-full overflow-hidden relative h-[200px] md:h-[300px]">
      <motion.div
        className="flex relative"
        style={{
          left: `calc(50% - ${imageBlockWidth * 2}px`,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
        animate={{ x: animateX }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
      >
        {[-2, -1, 0, 1, 2].map((offset) => {
          const isCenter = offset === 0;
          const isEdge = Math.abs(offset) === 2;
          
          return (
            <div 
              key={offset}
              className={`relative mx-2 ${isCenter ? 'z-10' : 'z-0'}`}
              style={{
                width: `${imageSize.width}px`,
                margin: '0 10px'
              }}
            >
              <motion.div
                alt={`Slide ${offset}`}
                className="w-full object-cover rounded-lg shadow-md"
                variants={isCenter ? centerVariants : rightVariants}
                animate={isAnimating ? 'active' : 'inactive'}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: '15px',
                  position: 'absolute',
                  opacity: isEdge ? 0.2 : (isCenter ? 1 : 0.7),
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
        <div className="w-[10vw] bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="w-[10vw] bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </div>
  );
}