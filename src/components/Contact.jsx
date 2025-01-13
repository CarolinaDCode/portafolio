import React, { useEffect, useRef, useState } from 'react';
import title from '../assets/hola.svg';

const Contact = () => {
    const eyelashestailRightRef = useRef(null);
    const eyelashesRightRef = useRef(null);
    const eyeRightRef = useRef(null);
    const irisRightRef = useRef(null);
    const pupilRightRef = useRef(null);
    const glowRightRef = useRef(null);
    const blushRightRef = useRef(null);
    const eyebrowRightRef = useRef(null);
    const shadeRightRef = useRef(null);
    const earRight = useRef(null);
    const hairRight = useRef(null);

    const faceRef = useRef(null);
    const noseRef = useRef(null);
    
    const eyelashestailLeftRef = useRef(null);
    const eyelashesLeftRef = useRef(null);
    const eyeLeftRef = useRef(null);
    const irisLeftRef = useRef(null);
    const pupilLeftRef = useRef(null);
    const glowLeftRef = useRef(null);
    const blushLeftRef = useRef(null);
    const eyebrowLeftRef = useRef(null);
    const shadeLeftRef = useRef(null);
    const earLeft = useRef(null);

    const toplips = useRef(null);
    const bottomlips = useRef(null);
    const lipLine = useRef(null);
    const rightLock = useRef(null);
    const leftLock = useRef(null);
    const littleLock = useRef(null);
    const hairLeft = useRef(null);

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        });
    };

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        seguir();
    };

    const handleTouchMove = (e) => {
        setCursorPos({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
        seguir();
    };
     
    const seguirCursor = (el, xRel, yRel) => {
        const elOffset = el.getBoundingClientRect();
        const centerX = elOffset.x + elOffset.width / 2;
        const centerY = elOffset.y + elOffset.height / 2;
    
        const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / windowDimensions.width);
        const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / windowDimensions.height);
    
        el.style.transform = `translate(${distanceLeft / xRel}px, ${distanceTop / yRel}px)`;
    };

    // const seguir = () =>{
    //     if (eyelashestailRightRef.current) seguirCursor(eyelashestailRightRef.current, 15, 15);
    //     if (eyelashesRightRef.current) seguirCursor(eyelashesRightRef.current, 25, 25);
    //     if (eyeRightRef.current) seguirCursor(eyeRightRef.current, 25, 25);

    //     if (irisRightRef.current) seguirCursor(irisRightRef.current, 25, 25);
    //     if (pupilRightRef.current) seguirCursor(pupilRightRef.current, 25, 25);
    //     if (glowRightRef.current) seguirCursor(glowRightRef.current, 25, 25);
    //     if (blushRightRef.current) seguirCursor(blushRightRef.current, 15, 15);
    //     if (eyebrowRightRef.current) seguirCursor(eyebrowRightRef.current, 15, 15);
    //     if (shadeRightRef.current) seguirCursor(shadeRightRef.current, 15, 15);
    //     if (shadeLeftRef.current) seguirCursor(shadeLeftRef.current, 15, 15);
    //     if (earRight.current) seguirCursor(earRight.current, 15, 15);
    //     if (hairRight.current) seguirCursor(hairRight.current, 15, 15);

    //     if (faceRef.current) seguirCursor(faceRef.current, 15, 15);
    //     if (noseRef.current) seguirCursor(noseRef.current, 15, 15);

    //     if (eyelashestailLeftRef.current) seguirCursor(eyelashestailLeftRef.current, 25, 25);
    //     if (eyelashesLeftRef.current) seguirCursor(eyelashesLeftRef.current, 15, 15);
    //     if (eyeLeftRef.current) seguirCursor(eyeLeftRef.current, 25, 25);

    //     if (irisLeftRef.current) seguirCursor(irisLeftRef.current, 25, 25);
    //     if (pupilLeftRef.current) seguirCursor(pupilLeftRef.current, 25, 25);
    //     if (glowLeftRef.current) seguirCursor(glowLeftRef.current, 25, 25);
    //     if (blushLeftRef.current) seguirCursor(blushLeftRef.current, 15, 15);
    //     if (eyebrowLeftRef.current) seguirCursor(eyebrowLeftRef.current, 15, 15);
    //     if (shadeLeftRef.current) seguirCursor(shadeLeftRef.current, 15, 15);
    //     if (earLeft.current) seguirCursor(earLeft.current, 15, 15);

    //     if (toplips.current) seguirCursor(toplips.current, 15, 15);
    //     if (bottomlips.current) seguirCursor(bottomlips.current, 15, 15);
    //     if (lipLine.current) seguirCursor(lipLine.current, 15, 15);
    //     if (rightLock.current) seguirCursor(rightLock.current, 15, 15);
    //     if (leftLock.current) seguirCursor(leftLock.current, 15, 15);
    //     if (littleLock.current) seguirCursor(littleLock.current, 15, 15);
    //     if (earRight.current) seguirCursor(earRight.current, 15, 15);
    //     if (hairLeft.current) seguirCursor(hairLeft.current, 15, 15);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     window.addEventListener('mousemove', handleMouseMove);
    //     window.addEventListener('touchmove', handleTouchMove);
    
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //       window.removeEventListener('mousemove', handleMouseMove);
    //       window.removeEventListener('touchmove', handleTouchMove);
    //     };
    // }, [cursorPos, windowDimensions]);

    return (
        <div id='contact' className='contact'>
            <div className="contact__spacemenu">
            </div>
            <div className='contact__container'>                    
                <div className="contact__info">
                    <img src={title}/>
                    <span className="contact__subtitle">Charlemos un poco</span>
                    <div className="contact__txt">
                        <p>Enviame un correo</p>
                        <span>dianacarhuamanta03@gmail.com</span>
                        <p>también puedes enviarme un mensaje a mis redes sociales.</p>
                    </div>
                </div>
                <svg className='contact__draw'
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_2"
                    data-name="Capa 2"
                    viewBox="0 0 137.22 230.51">
                    <defs>
                    <style>
                        {`.cls-1 { fill: #fff; }
                        .cls-2 { fill: #b7805b; }
                        .cls-3 { fill: #cc9e7f; }
                        .cls-4 { fill: #eac1a2; }
                        .cls-5 { fill: #ab5a4f; }
                        .cls-6 { fill: #84bc26; }
                        .cls-7 { fill: #dadada; }
                        .cls-8 { fill: #422612; }
                        .cls-9 { fill: #774100; }
                        .cls-10 { fill: #e08366; isolation: isolate; opacity: .4; }
                        .cls-11 { fill: #ce9e7d; }
                        .cls-12 { fill: #2c1b11; }
                        .cls-13 { fill: #754b2f; }
                        .cls-14 { fill: #1d1d1b; }`}
                    </style>
                    </defs>
                        <rect    className="cls-7" width="137.22" height="230.5" rx="59.84" ry="59.84"/>
                        <path    className="cls-12 cabelloDerecho" ref={hairRight} d="m66.73,43.87l13.63-12.74c1.55-1.45,7.48-.69,9.29-.52,9.98.92,19.79,4.5,25.66,13.05,6.94,10.1,8.74,24.15,6.16,35.94-1.67,7.65-4.46,15.07-3.21,23.05,1.42,9.12,6.42,14.5,6.42,22.81s-3.09,14.73-3.09,14.73c0,0-3.33,8.08,3.09,12.36s7.37,14.5,7.37,14.5c0,0,3.09,3.82-4.28,16.89l-61.04,2.85-13.1-52.63,13.1-90.29h0Z"/>
                        <path    className="cls-12 cabelloIzquierdo" ref={hairLeft} d="m70.12,43.87s11.94-13.6,11.92-13.61c-10.35-7.69-33.86-8.01-45.76-1.03-10.44,6.12-17.21,16.37-20.3,27.96-1.94,7.28-2.21,15.04-.61,22.41s4.46,15.07,3.21,23.05c-1.42,9.12-6.42,14.5-6.42,22.81s3.09,14.73,3.09,14.73c0,0,3.33,8.08-3.09,12.36s-7.37,14.5-7.37,14.5c0,0-3.09,3.82,4.28,16.89l61.04,2.85,13.1-52.63-13.1-90.29h0Z"/>
                        <path    className="cls-11" d="m103.81,180.36l-35.44,8.91-33.5-8.91s17.64-8.3,19.45-13.59,0-18.72,0-18.72h28.75s-.22,15.01,1.46,19.72,19.28,12.59,19.28,12.59Z"/>
                        <path    className="cls-11 oidoIzquierdo" ref={earLeft} d="m28.61,107.58s-3.56-6.42-9.45-1.25,12.09,15.56,12.09,15.56c0,0,1.99-5.41-2.65-14.32h.01Z"/>
                        <path    className="cls-11 oidoDerecho" ref={earRight} d="m109.95,107.58s3.56-6.42,9.45-1.25-11.22,15.56-11.22,15.56c0,0-2.86-5.41,1.77-14.32h0Z"/>
                        <path    className="cls-4 rostro" ref={faceRef} d="m109.95,111.33c0,22.77-26.26,45.5-40.28,45.5-15.92,0-40.28-22.74-40.28-45.5s6.18-65.47,40.28-65.47,40.28,42.7,40.28,65.47Z"/>
                        <path    className="cls-3 nariz" ref={noseRef}  d="m66.51,132.31s2.31,1.52,3.3,1.52,3.04-1.52,3.04-1.52c0,0-1.02,2.74-3,2.8s-3.33-2.8-3.33-2.8h-.01Z"/>
                        <ellipse className="cls-10 ruborDerecho" ref={blushRightRef} cx="97.59" cy="121.88" rx="10.46" ry="8.44" transform="translate(-25 25.18) rotate(-13.05)"/>
                        <ellipse className="cls-10 ruborIzquierdo" ref={blushLeftRef} cx="41.86" cy="121.91" rx="8.44" ry="10.46" transform="translate(-86.36 135.17) rotate(-76.95)"/>
                        <path    className="cls-3 sombraCejaIzquierda" ref={shadeLeftRef} d="m43.69,93.68s3.18-.41,7.17,1.64c3.41,1.76,7.46,5.52,10.08,10.75,1.96,3.91,3.77,9.71,3.77,14.29,0,0-.96-6.9-5.64-14.73-1.99-3.34-5.14-5.99-15.38-11.94h0Z"/>
                        <path    className="cls-3 sombraCejaDerecha" ref={shadeRightRef} d="m94.8,91.35s-3.12-.76-7.3.85c-3.59,1.38-7.15,3.42-10.33,8.32-2.38,3.67-3.45,9.76-3.95,14.3,0,0,.45-3.21,1.47-6.38.82-2.52,1.93-5.53,4.38-8.75.8-1.05,2.64-2.8,3.81-3.65,2.28-1.65,4.77-1.52,11.93-4.69h-.01Z"/>
                        <path    className="cls-14 cejaDerecha" ref={eyebrowRightRef} d="m78.14,99.21s3.03-11.41,27.09-7.04c0,0,2.35.53,3.58,1.07,0,0-11.16.71-19.97,2.5s-10.69,3.48-10.69,3.48h0Z"/>
                        <path    className="cls-14 cejaIzquierda" ref={eyebrowLeftRef} d="m55.26,100.41s-3.03-11.41-27.09-7.04c0,0-2.35.53-3.58,1.07,0,0,11.16.71,19.97,2.5s10.69,3.48,10.69,3.48h0Z"/>
                    <g>
                        <path    className="cls-1 ojoBlancoDerecho" ref={eyeRightRef} d="m103.73,105.75c.57,1.18-2.03,6.43-7.64,10.34-3.16,2.2-7.93,3.15-11.33.95-1.6-1.04-2.7-2.59-2.72-4.54-.03-1.79.73-3.6,2.02-4.84.14-.13.29-.26.44-.38,1.45-1.13,3.28-1.7,5.07-2.01,5.84-1.01,13.59-.7,14.16.49h0Z"/>
                    <g>
                        <circle  className="cls-9 rightIris" ref={irisRightRef} cx="90.8" cy="111.11" r="6.79"/>
                        <ellipse className="cls-14 rightPupil" ref={pupilRightRef} cx="90.33" cy="110.2" rx="2.93" ry="3.62"/>
                        <circle  className="cls-1 rightGlowPupil" ref={glowRightRef} cx="91.79" cy="108.64" r="1.68"/>
                    </g>
                    <g>
                        <path    className="cls-14" ref={eyelashesRightRef} d="m105.73,102.69c-4.66,1.57-10.11-.61-15.09.72-5.16,1.18-10.12,5.15-11.16,10.5,2.31-4.46,6.81-7.42,11.61-8.29,4.16-.88,8.52,1.23,12.76.31-.41.71-2.39,3.99-3.21,5.18-.93,1.35-2.43,2.8-3.74,3.8-1.27,1.03-3.28,2.44-4.81,2.86,1.67-.18,4.17-1.68,5.5-2.71,2.19-1.69,3.54-3,5.12-4.84,2.17-2.59,3.94-5.65,5.63-8.59l-2.6,1.04v.02Z"/>
                        <path    className="cls-14" ref={eyelashestailRightRef} d="m98.37,105.22s6.24.24,3.61,4.08l3.16-4.08v-.62l-6.77.62Z"/>
                    </g>
                    </g>
                    <g>
                        <path    className="cls-1 ojoBlancoIzquierdo" ref={eyeLeftRef} d="m32.88,105.75c-.57,1.18,2.03,6.43,7.64,10.34,3.16,2.2,7.93,3.15,11.33.95,1.6-1.04,2.7-2.59,2.72-4.54.03-1.79-.73-3.6-2.02-4.84-.14-.13-.29-.26-.44-.38-1.45-1.13-3.28-1.7-5.07-2.01-5.84-1.01-13.59-.7-14.16.49h0Z"/>
                    <g>
                        <circle  className="cls-9 leftIris" ref={irisLeftRef} cx="45.82" cy="111.11" r="6.79"/>
                        <ellipse className="cls-14 leftPupil" ref={pupilLeftRef} cx="46.28" cy="110.2" rx="2.93" ry="3.62"/>
                        <circle  className="cls-1 leftGlowPupil" ref={glowLeftRef} cx="48.83" cy="108.64" r="1.68"/>
                    </g>
                    <g>
                        <path  className="cls-14" ref={eyelashesLeftRef} d="m30.88,102.69c4.66,1.57,10.11-.61,15.09.72,5.16,1.18,10.12,5.15,11.16,10.5-2.31-4.46-6.81-7.42-11.61-8.29-4.16-.88-8.52,1.23-12.76.31.41.71,2.39,3.99,3.21,5.18.93,1.35,2.43,2.8,3.74,3.8,1.27,1.03,3.28,2.44,4.81,2.86-1.67-.18-4.17-1.68-5.5-2.71-2.19-1.69-3.54-3-5.12-4.84-2.17-2.59-3.94-5.65-5.63-8.59l2.6,1.04v.02Z"/>
                        <path  className="cls-14" ref={eyelashestailLeftRef} d="m38.25,105.22s-6.24.24-3.61,4.08l-3.16-4.08v-.62l6.77.62Z"/>
                    </g>
                    </g>
                    <path  className="cls-5 labioSuperior" ref={toplips} d="m61.48,143.41s1.42-1.13,7.21-1.07,7.23,1.34,7.23,1.34c0,0-4.69.91-7.22.77s-4.89-.23-7.22-1.03h0Z"/>
                    <path  className="cls-5 labioInferior" ref={bottomlips} d="m61.48,143.41s1.42,3.56,7.21,3.65,7.23-3.38,7.23-3.38l-7.76-.28h-6.68Z"/>
                    <path  className="cls-8 mechonDerecho" ref={rightLock} d="m62.19,58.46c4.21,4.88,8.58,9.62,13.01,14.3,8.4,8.87,17.07,17.6,26.56,25.31,4.16,3.38,8.48,6.68,13.42,8.82,3.28,1.42,6.47,1.46,9.98,1.71,0,0-4.85-2.51-6.65-8.19-6.4-20.19-20.18-66.51-48.83-58.35,0,0-2.14.83-2.94,1.81,0,0-3.83,6.89-4.54,14.58h-.01Z"/>
                    <path  className="cls-8 mechonIzquierdo" ref={leftLock} d="m67.49,41.09s-7.68,14.91-15.99,34.11c-13.71,31.65-33.56,42.72-33.56,42.72,0,0,8.23-17.82,8.34-44.91s28.35-48.65,41.22-31.92h-.01Z"/>
                    <path  className="cls-12 mechonPequenio" ref={littleLock} d="m63.61,57.33s-2.67-.09-6.47,7.31c-2.62,5.1-7.11,13.78-10.38,20.31,0,0,1.42-8.45,2.45-19.78.85-9.34.88-21.48,4.41-25.04,7.13-7.2,14.09-3.47,14.81,4.01l-4.81,13.19h-.01Z"/>
                    <path  className="cls-13 linealabio" ref={lipLine} d="m59.47,141.43c4.3,3.88,11.81,3.15,16.88,1.31.79-.32,1.54-.73,2.19-1.31-3.78,4.7-15.59,5.37-19.07,0h0Z"/>
                    <path  className="cls-2" d="m54.84,165.86l-.1-.81s4.68,2.14,13.87,2.06,15.29-2.06,15.29-2.06l-2.22,2.06-10.81,2.25-8.73-.36-4.22-1.23-3.07-1.92h0Z"/>
                    <path  className="cls-6" d="m59.84,230.5h17.54c29.06,0,53.28-20.72,58.7-48.2-7.2-7.08-22.48-4.42-30.94-6.63-11.27-2.95-19.6-6.77-19.6-6.77-1.37-1.13-1.64-3.84-1.64-3.84-4.54,1.82-7.21,2.59-14.89,2.83-9.97.31-14.27-2.83-14.27-2.83-.27,2.28-2.14,3.84-2.14,3.84,0,0-8.44,2.77-18.57,4.46-7.98,1.33-25.66,1.07-31.54,8.91-.37.5-.71.98-1.04,1.47,5.96,26.76,29.83,46.77,58.39,46.77h0Z"/>
                </svg>
            </div>   
        </div>
    );
}

export default Contact;