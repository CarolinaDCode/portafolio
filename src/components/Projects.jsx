import proyectos from '../assets/proyectos.svg';
import github from '../assets/icon_github_negativo.svg';
import enlace from '../assets/icon_enlace.svg';
import imagen from '../assets/fondo_.jpg';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <img src={proyectos} className='projects__title'/>
            <div className='projects__container'>
                <div className='projects__card projects__card--block'>
                    <div className='projects__card projects__card--position projects__card--mask'>
                        <img src={imagen} />
                    </div>
                    <div className='projects__card projects__card--position projects__card--info'>
                        <h1>Job Search Web</h1>
                        <span>Next | React | Emotion</span>
                        <div className='projects__icons'>
                            <img src={github}/>
                            <img src={enlace}/>
                        </div>
                    </div>
                </div>
                <div className='projects__card projects__card--block'>
                    <div className='projects__card projects__card--position projects__card--mask'>
                        <img src={imagen} />
                    </div>
                    <div className='projects__card projects__card--position projects__card--info'>
                        <h1>Job Search Web</h1>
                        <span>Next | React | Emotion</span>
                        <div className='projects__icons'>
                            <img src={github}/>
                            <img src={enlace}/>
                        </div>
                    </div>
                </div>
                <div className='projects__card projects__card--block'>
                    <div className='projects__card projects__card--position projects__card--mask'>
                        <img src={imagen} />
                    </div>
                    <div className='projects__card projects__card--position projects__card--info'>
                        <h1>Job Search Web</h1>
                        <span>Next | React | Emotion</span>
                        <div className='projects__icons'>
                            <img src={github}/>
                            <img src={enlace}/>
                        </div>
                    </div>
                </div>
                <div className='projects__card projects__card--block'>
                    <div className='projects__card projects__card--position projects__card--mask'>
                        <img src={imagen} />
                    </div>
                    <div className='projects__card projects__card--position projects__card--info'>
                        <h1>Job Search Web</h1>
                        <span>Next | React | Emotion</span>
                        <div className='projects__icons'>
                            <img src={github}/>
                            <img src={enlace}/>
                        </div>
                    </div>
                </div>
                <div className='projects__card projects__card--block'>
                    <div className='projects__card projects__card--position projects__card--mask'>
                        <img src={imagen} />
                    </div>
                    <div className='projects__card projects__card--position projects__card--info'>
                        <h1>Job Search Web</h1>
                        <span>Next | React | Emotion</span>
                        <div className='projects__icons'>
                            <img src={github}/>
                            <img src={enlace}/>
                        </div>
                    </div>
                </div>
                <div className='projects__card projects__card--block'>
                    <div className='projects__card projects__card--position projects__card--mask'>
                        <img src={imagen} />
                    </div>
                    <div className='projects__card projects__card--position projects__card--info'>
                        <h1>Job Search Web</h1>
                        <span>Next | React | Emotion</span>
                        <div className='projects__icons'>
                            <img src={github}/>
                            <img src={enlace}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;