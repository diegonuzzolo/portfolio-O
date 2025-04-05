
import lettera_img from '../assets/letter-closed.png';
import lettera_opened_img from '../assets/letter-opened.png';

import { useState, useEffect } from 'react';

const Letter = ({ drawings }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Rilevamento dispositivo al mount e al resize
  useEffect(() => {
    const checkMobile = () => {
      const mobileBreakpoint = 768;
      setIsMobile(window.innerWidth < mobileBreakpoint || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Busta con stili condizionali */}
      <div
        className="cursor-pointer transition-transform duration-300"
        style={{ 
          backgroundImage: open ? `url(${lettera_opened_img})` : `url(${lettera_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: isMobile ? (open ? "120px" : "200px") : (open ? "20vh" : "30vh"),
          height: isMobile ? (open ? "90px" : "150px") : (open ? "15vh" : "20vh"),
          top: isMobile ? (open ? "5%" : "15%") : (open ? "15%" : "25%"),
          transform: open ? (isMobile ? "translateY(-300%)" : "translateY(-1000%)") : "translateY(0%)"
        }}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className={`p-5 m-5 ${isMobile ? 'mt-20' : 'mt-40'} w-full`}>
          {/* Grid adattivo */}
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
          {Array.from(drawings.entries()).map(([src, description], index) => (
  <div key={index} className="flex flex-col items-center">
    <div
      style={{
        width: '90vh',
        height: '60vh', // Aggiunta altezza fissa
        backgroundImage: `url(${src})`,
        backgroundSize: 'contain', // Aggiunto per ridimensionare l'immagine
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    <p className="
  text-gray-600 
  dark:text-gray-300 
  text-sm 
  md:text-base 
  text-center 
  italic 
  mt-2 
  mb-4 
  px-2 
  max-w-[80%] 
  mx-auto 
  leading-relaxed
  transition-opacity 
  duration-300
  hover:opacity-80
  [text-shadow:_0_1px_0_rgba(255,255,255,0.5)]
  dark:[text-shadow:_0_1px_0_rgba(0,0,0,0.3)]
">{description}</p>
    <br/><br/><br/><br/>
  </div>
))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Letter;
