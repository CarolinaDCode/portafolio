import { useState, useEffect } from "react";

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [numberOfDivs, setNumberOfDivs] = useState(0);
    const circleSize = 30;

    useEffect(()=>{
        setWindowWidth(window.innerWidth);
        if(windowWidth > 0){
            setNumberOfDivs(Math.round(windowWidth/circleSize));
        }

    },[])

    const divs = Array.from({length: numberOfDivs}, (_,index) =>(
        <div key={index} className="footer__circle"></div>
    ));


    return (
        <div id='footer' className='footer'>
            <div className='footer__blockdivs'>
                {divs}
            </div>
            <div className='footer__container'>
                <div className='footer__txt'>
                    <p>“La creatividad es la inteligencia divirtiéndose”</p>
                    <span>© Diana Carhuamanta 2024</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;