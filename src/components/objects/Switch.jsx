import React, { useState, useRef, useEffect } from 'react';
import { useThemeContext } from '../../context/ThemeContext';

const Switch = ({ sendContextThemeToParent }) =>{
    const {contextTheme, setContextTheme} = useThemeContext();
    // const [mode, setMode] = useState(false);

    const esferaRef = useRef(null);
    const sphereBackgroundRef = useRef(null);
    const cloudRef = useRef(null);
    const backgroundRef = useRef(null);
    const moonRef = useRef(null);
    const starsRef = useRef(null);

    const handleClick = () => {
        sphereBackgroundRef.current.classList.toggle("switch___right");
        cloudRef.current.classList.toggle("switch___abajo");
        backgroundRef.current.classList.toggle("switch___black");
        moonRef.current.classList.toggle("switch___center");
        starsRef.current.classList.toggle("switch___newstar");

        setContextTheme((state)=>(state === 'Light'? 'Dark':'Light'));
        sendContextThemeToParent(contextTheme);

        // if(sphereBackgroundRef.current.classList.contains("switch___right")){
        //     setMode(false);
        // }else{
        //     setMode(true);
        // }
    }

    return (
        <div className="switch___container">
            <div className="switch___background" ref={backgroundRef}>
                <div className="switch___estrellas" ref={starsRef}>
                    <div className="switch___star switch___star--1"></div>
                    <div className="switch___star switch___star--2"></div>
                    <div className="switch___star switch___star--3"></div>
                    <div className="switch___star switch___star--4"></div>
                    <div className="switch___star switch___star--5"></div>
                    <div className="switch___star switch___star--6"></div>
                    <div className="switch___star switch___star--7"></div>
                    <div className="switch___star switch___star--8"></div>
                    <div className="switch___star switch___star--9"></div>
                    <div className="switch___star switch___star--10"></div>
                </div>
                <div className="switch___nube" ref={cloudRef}>
                    <div className="switch___n1"></div>
                    <div className="switch___n2"></div>
                    <div className="switch___n3"></div>
                    <div className="switch___n4"></div>
                    <div className="switch___n5"></div>
                    <div className="switch___n6"></div>
                </div>
                <div className="switch___sombra"></div>
                <div className="switch___fondoEsfera" ref={sphereBackgroundRef}>
                    <div className="switch___esfera" ref={esferaRef} onClick={handleClick}>
                        <div className="switch___luna" ref={moonRef}>
                            <div className="switch___crater1"></div>
                            <div className="switch___crater2"></div>
                            <div className="switch___crater3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Switch;