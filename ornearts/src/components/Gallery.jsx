import Letter from "../components/Letter"

import img1 from "../assets/img_galleria/img1.jpg";
import img2 from "../assets/img_galleria/img2.jpg";
import img3 from "../assets/img_galleria/img3.jpg";
import img4 from "../assets/img_galleria/img4.jpg";
import img5 from "../assets/img_galleria/img5.jpg";
import img6 from "../assets/img_galleria/img6.jpg";
import img7 from "../assets/img_galleria/img7.jpg";
import img8 from "../assets/img_galleria/img8.jpg";
import img9 from "../assets/img_galleria/img9.jpg";
import img10 from "../assets/img_galleria/img10.jpg";
import img11 from "../assets/img_galleria/img11.jpg";

const Gallery = () => {
    const drawing = new Map([
        [img1, "rêve d'un clown, tecnica mista su tela, 2024"],
        [img2, "love poem, acrilico su tela, 2024"],
        [img3, "the idiot with the painted face, acrilico su legno, 2025"],
        [img4, "underneath the stars, acrilico su tela, 2024"],
        [img5, "cwtch, acrilico su tela, 2024"],
        [img6, "judgement, tecnica mista su tela, 2024"],
        [img7, "ossimoro, tecnica mista su legno, 2025"],
        [img8, "eloisa to abelard, tecnica mista su tela, 2024"],
        [img9, "doom, acrilico su legno, 2025"],
        [img10, "perplitudine con gattino, acrilico su legno, 2024"],
        [img11, "disparaître, acrilico su tela, 2024"],
    ])

    return (
        <div>
            <Letter drawings={drawing}/>
        </div>
    );


}

export default Gallery;