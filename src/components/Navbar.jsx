import { useRef, useState, useEffect } from 'react';
import cv from '../assets/cvDianaCarhuamanta.pdf';
import wavylines from '../assets/wavylines.svg';
import heartIcon from '../assets/heart.svg';
import { useThemeContext } from '../context/ThemeContext';

const NavBar = () => {
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredAboutme, setIsHoveredAboutme] = useState(false);
    const [isHoveredSkills, setIsHoveredSkills] = useState(false);
    const [isHoveredExperis, setIsHoveredExperis] = useState(false);
    const [isHoveredProyect, setIsHoveredProyect] = useState(false);
    const [isHoveredCV, setIsHoveredCV] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ulElement = useRef();
    const navRef = useRef();

    const {contextTheme} = useThemeContext();
    const [newColorTheme, setNewColorTheme] = useState(false);

    const showNavbar = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 780 && isMenuOpen) {
                setIsMenuOpen(false); 
            } else if (window.innerWidth < 780 && isMenuOpen){
                setIsMenuOpen(false); 
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (navRef.current) {
            navRef.current.classList.toggle('navbar__menuresponsive', isMenuOpen);
        }
    }, [isMenuOpen]);

    //isMenuOpen sigue siendo falso
    const isMenuClosed = isMenuOpen;

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }; 


    return (
        <div>
            <nav className='navbar' ref={navRef} id={contextTheme==='Dark'?'':'Dark'}>
                { isMenuOpen ? '': <span className='navbar__title'><img src="/assets/logo.png" alt="Logo"></img></span>}
                <button className="navbar__buttonopen" onClick={showNavbar}>
                    {   isMenuOpen ? <svg className="navbar__svgclose" 
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 99.29 99.29"
                                          style={{ enableBackground: '0 0 99.29 99.29' }}>
                                          <path className="st0" d="m90.79,99.29c-2.18,0-4.35-.83-6.01-2.49L2.49,14.51C-.83,11.19-.83,5.81,2.49,2.49,5.81-.83,11.19-.83,14.51,2.49l82.29,82.29c3.32,3.32,3.32,8.7,0,12.02-1.66,1.66-3.83,2.49-6.01,2.49Z"/>
                                          <path className="st0" d="m0,90.79c0-2.18.83-4.35,2.49-6.01L84.78,2.49c3.32-3.32,8.7-3.32,12.02,0,3.32,3.32,3.32,8.7,0,12.02L14.51,96.8c-3.32,3.32-8.7,3.32-12.02,0C.83,95.14,0,92.96,0,90.79Z"/>
                                     </svg> : 
                                     <svg className="navbar__svgopen"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 109.3 95.9"
                                          style={{ enableBackground: 'new 0 0 109.3 95.9' }}>
                                          <path className="st0" d="M100.8,17H8.5C3.8,17,0,13.2,0,8.5S3.8,0,8.5,0h92.3c4.7,0,8.5,3.8,8.5,8.5S105.5,17,100.8,17z"/>
                                          <path className="st0" d="M100.8,56.4H8.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5h92.3c4.7,0,8.5,3.8,8.5,8.5S105.5,56.4,100.8,56.4z"/>
                                          <path className="st0" d="M100.8,95.9H8.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5h92.3c4.7,0,8.5,3.8,8.5,8.5S105.5,95.9,100.8,95.9z"/>
                                     </svg>
                    }
                </button>
                <ul className={`navbar__list ${isMenuClosed ? 'navbar__list--closed' : 'navbar__list'}`} ref={ulElement}>
                    <li className={isMenuClosed ? 'li--closed' : ''} onMouseEnter={() => setIsHoveredHome(true)} onMouseLeave={() => setIsHoveredHome(false)} >
                        <div className='navbar__container'>
                            <a href='#home' className={`navbar__listitem navbar__listitem--urderline ${isMenuClosed ? 'navbar__listitem--closed' : ''}`} onClick={handleLinkClick}>Home</a>
                            {isHoveredHome && <img className="navbar__listitemsub" src={heartIcon} alt="Heart Icon"></img>}
                        </div>
                        {isHoveredHome && <img className="navbar__listitemsub" src={wavylines} alt="Wavy Lines"></img>}
                    </li>
                    <li className={isMenuClosed ? 'li--closed' : ''} onMouseEnter={() => setIsHoveredAboutme(true)} onMouseLeave={() => setIsHoveredAboutme(false)} >
                        <div className='navbar__container'>
                            <a href='#aboutme' className={`navbar__listitem navbar__listitem--urderline ${isMenuClosed ? 'navbar__listitem--closed' : ''}`} onClick={handleLinkClick}>Experiencia</a>

                            {isHoveredAboutme && <img className="navbar__listitemsub" src={heartIcon}></img>}
                        </div>
                        {isHoveredAboutme && <img className="navbar__listitemsub" src={wavylines} alt="Wavy Lines"></img>}
                    </li>
                    <li className={isMenuClosed ? 'li--closed' : ''} onMouseEnter={() => setIsHoveredSkills(true)} onMouseLeave={() => setIsHoveredSkills(false)} >
                        <div className='navbar__container'>
                            <a href='#skills' className={`navbar__listitem navbar__listitem--urderline ${isMenuClosed ? 'navbar__listitem--closed' : ''}`} onClick={handleLinkClick}>Habilidades</a>

                            {isHoveredSkills && <img className="navbar__listitemsub" src={heartIcon}></img>}
                        </div>
                        {isHoveredSkills && <img className="navbar__listitemsub" src={wavylines} alt="Wavy Lines"></img>}
                    </li>

                    <li className={isMenuClosed ? 'li--closed' : ''} onMouseEnter={() => setIsHoveredProyect(true)} onMouseLeave={() => setIsHoveredProyect(false)} >
                        <div className='navbar__container'>
                            <a href='#projects' className={`navbar__listitem navbar__listitem--urderline ${isMenuClosed ? 'navbar__listitem--closed' : ''}`} onClick={handleLinkClick}>Proyectos</a>

                            {isHoveredProyect && <img className="navbar__listitemsub" src={heartIcon}></img>}
                        </div>
                        {isHoveredProyect && <img className="navbar__listitemsub" src={wavylines} alt="Wavy Lines"></img>}
                    </li>

                    <li className={isMenuClosed ? 'li--closed' : ''} onMouseEnter={() => setIsHoveredExperis(true)} onMouseLeave={() => setIsHoveredExperis(false)} >
                        <div className='navbar__container'>
                            <a href='#contact' className={`navbar__listitem navbar__listitem--urderline ${isMenuClosed ? 'navbar__listitem--closed' : ''}`} onClick={handleLinkClick}>Contacto</a>

                            {isHoveredExperis && <img className="navbar__listitemsub" src={heartIcon}></img>}
                        </div>
                        {isHoveredExperis && <img className="navbar__listitemsub" src={wavylines} alt="Wavy Lines"></img>}
                    </li>

                    <li className={isMenuClosed ? 'li--closed' : ''} onMouseEnter={() => setIsHoveredCV(true)} onMouseLeave={() => setIsHoveredCV(false)} >
                        <div className='navbar__container'>
                            <a href={cv} target="" className={`navbar__listitem navbar__listitem--urderline ${isMenuClosed ? 'navbar__listitem--closed' : ''}`} onClick={handleLinkClick}>CV</a>

                            {isHoveredCV && <img className="navbar__listitemsub" src={heartIcon}></img>}
                        </div>
                        {isHoveredCV && <img className="navbar__listitemsub" src={wavylines} alt="Wavy Lines"></img>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
