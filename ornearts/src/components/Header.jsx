import { useState } from "react";
import { useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
const HeaderForMobile = () => {
  const isMobile = useIsMobile();
  // Stato per ogni link
  const [styles, setStyles] = useState({
    suDiMe: {},
    lavori: {},
    eventi: {}
  });

  const handleMouseEnter = (link) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [link]: { textDecorationLine: "underline" }
    }));
  };

  const handleMouseLeave = (link) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [link]: { textDecorationLine: "none" }
    }));
  };
  
const handleScrollToFooter = () => {
  const footer = document.getElementById('footer');
  if (footer) {
    footer.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Animazione aggiuntiva opzionale
    footer.style.transform = 'translateY(20px)';
    footer.style.opacity = '0';
    footer.style.transition = 'all 0.5s ease-out';
    
    setTimeout(() => {
      footer.style.transform = 'translateY(0)';
      footer.style.opacity = '1';
    }, 100);
  }
};

  return (
    
    <div
      style={{
        bottom: isMobile ? '98%' : '100%',
        left: isMobile ? '10%' : '70%',
        width: "292px",
        height: "56px",
        position: "absolute",
      }}
    >
            <style>{`
        @keyframes slideDown {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
           @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          80% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `
      
      
      }
      
      </style>
      {/* <span
        style={{
          
          position: "absolute",
          width: "140px",
          height: "32px",
          left: "120px",
          top: "120px",
          fontFamily: "Comfortaa",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "180%",
          color: "#25282B",
          display: 'inline-block',
          opacity: 0,
          transform: "scale(0.5)",
          animation: 'popIn 1s ease-out 1s forwards',
        }}
      >
        Ornella Xhemalaj
      </span> */}
      
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          gap: "48px",
          width: "292px",
          height: "32px",
          alignItems: 'center',
          backgroundColor: "transparent",
          borderRadius: '5px 10px 15px 20px',
          transform: 'translateY(-100%)',
          opacity: 0,
          animation: 'slideDown 2s ease-out forwards',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}
      >
        <span
          className="cursor-pointer"
          onMouseEnter={() => handleMouseEnter("suDiMe")}
          onMouseLeave={() => handleMouseLeave("suDiMe")}
          onClick={handleScrollToFooter} // Aggiunto onClick
          style={styles.suDiMe}
        >
          Su di me
        </span>
        <a href="/galleria"
          style={{color: "black"}}
        >
        <span
          className="cursor-pointer"
          onMouseEnter={() => handleMouseEnter("lavori")}
          onMouseLeave={() => handleMouseLeave("lavori")}
          style={styles.lavori}
          >
          Lavori
        </span>
          </a>
        <span
          className="cursor-pointer"
          onMouseEnter={() => handleMouseEnter("eventi")}
          onMouseLeave={() => handleMouseLeave("eventi")}
          style={styles.eventi}
        >
          Eventi
        </span>
      </nav>
    </div>
    
  );
};

export default HeaderForMobile;
