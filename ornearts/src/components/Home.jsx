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
    
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    
    const useIsMobile = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
        
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth < 1024);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        
        return isMobile;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError('');
        
        try {
            const res = await fetch("http://localhost/contact.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, subject, message })
            });
            
            const data = await res.json();
            
            if (res.ok && data.success) {
                setSuccess(true);
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setError(data.error || "Errore nell'invio del messaggio");
            }
            
        } catch (err) {
            setError("Errore di rete o server");
        }
    };
    
    const isMobile = useIsMobile();
    
    return (
        <div>
            <Header/>
            {isMobile ? <ProfilePhotoMobile/> : <ProfilePhoto />}
            {isMobile ? <ImageCarouselMobile/> : <ImageCarousel/>}
            <Form></Form>
            {/* <form onSubmit={handleSubmit} >
                {success && <div className="success-message">Messaggio inviato con successo! 🎉</div>}
                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label htmlFor="email">La tua email</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="esempio@dominio.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Oggetto</label>
                    <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} required placeholder="Es. Collaborazione artistica" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Il tuo messaggio</label>
                    <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required placeholder="Scrivi qui il tuo messaggio..."></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Invia Messaggio
                </button>
            </form> */}

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
