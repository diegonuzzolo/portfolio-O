import { useState, useEffect } from "react";
import Header from './Header';
import ProfilePhoto from "./ProfilePhoto";
import ProfilePhotoMobile from "./ProfilePhotoMobile";
import ImageCarousel from "./ImageCarousel";
import ImageCarouselMobile from "./ImageCarouselMobile";
import insta from '../assets/instagrampng.png'
import tiktok from '../assets/tiktokpng.png'
import Form from './Form'

const Home = () => {
    

    
    const useIsMobile = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
        
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth < 1024);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        
        return isMobile;
    };






    const isMobile = useIsMobile();



    return (
        <div>
            <Header/>
            {isMobile ? <ProfilePhotoMobile/> : <ProfilePhoto />}
            <Form></Form>
            {isMobile ? <ImageCarouselMobile/> : <ImageCarousel/>}
          
            <footer id="footer" style={{position:"absolute", bottom:"0%", width: '100%'}} class="social-footer">
                <div class="social-container">
                    <h3 class="social-title">Seguimi sui social</h3>
                    <div  class="social-links">
                        <a  href="https://www.instagram.com/ahoripip/" class="social-link instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <div style={{
                                backgroundImage: `url(${insta})`,
                                width: "32px",
                                height: "32px",
                            }} aria-label="Instagram">
                            </div>
                        </a> 
                        
                        <a href="https://tiktok.com/@ahorimimimiizz" class="social-link tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <div style={{
                                backgroundImage: `url(${tiktok})`,
                                width: "32px",
                                height: "32px",
                            }} aria-label="Tiktok">
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
