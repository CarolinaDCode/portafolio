import SocialIcons from './SocialNetworks';
import shelf from '../assets/shelf.svg';
import foto from '../assets/foto.png';

const Home = () => {
    return (
        <div id='home' className='home'>
            <SocialIcons/>
            <div>
                <div className='elements'>
                    <div className='elements__lamp'>
                        <svg width="136" height="98" viewBox="0 0 136 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_73_56)">
                                <path d="M88.5059 23.0861L93.5559 25.2149L88.5059 26.7348V23.0861Z" fill="#DB6482" />
                                <path d="M48.1639 23.0861L43.1138 25.2149L48.1639 26.7348V23.0861Z" fill="#DB6482" />
                                <path d="M70.2073 0H65.6754V9.02689H70.2073V0Z" fill="url(#paint0_linear_73_56)" />
                                <path d="M89.7818 44.3015H46.4528V18.5312C46.4528 18.5312 45.2893 7.99902 68.1197 7.99902C90.9502 7.99902 89.7867 18.5312 89.7867 18.5312V44.3015H89.7818Z" fill="url(#paint1_linear_73_56)" />
                                <path d="M93.5559 25.2149C93.5559 25.2149 85.0593 23.0422 68.3349 23.0422C51.6105 23.0422 43.1138 25.2149 43.1138 25.2149V18.5312C43.1138 18.5312 47.9928 16.3585 68.3349 16.3585C88.6769 16.3585 93.5559 18.5312 93.5559 18.5312V25.2149Z" fill="#E07E91" />
                                <path d="M136 89.5528L106.374 34.8897C106.032 34.0031 105.255 33.3503 104.321 33.1701C65.8416 25.7021 43.0796 31.6794 35.4678 33.1603C34.5292 33.3406 33.7519 33.9934 33.4097 34.88L0 89.1777L136 89.5528Z" fill="url(#paint2_linear_73_56)" />
                                <path d="M136 89.5528C136 93.8641 116.289 98.0049 68.0073 98.0049C19.7261 98.0049 0 93.8641 0 89.5528C0 85.529 19.7212 81.1008 68.0073 81.1008C116.293 81.1008 136 85.529 136 89.5528Z" fill="#E07E91" />
                                <path d="M128.466 89.4993C128.466 93.2308 116.753 96.8114 68.4815 96.8114C20.2101 96.8114 7.53845 93.2308 7.53845 89.4993C7.53845 86.0161 20.2101 82.1871 68.4815 82.1871C116.753 82.1871 128.466 86.021 128.466 89.4993Z" fill="#FFFBDC" />
                            </g>
                            <defs>
                            <linearGradient id="paint0_linear_73_56" x1="67.9389" y1="-0.696625" x2="67.9389" y2="12.8169" gradientUnits="userSpaceOnUse">
                                <stop offset="0.17" stopColor="#939393" stopOpacity="0" />
                                <stop offset="0.26" stopColor="#939393" stopOpacity="0.22" />
                                <stop offset="0.39" stopColor="#939393" stopOpacity="0.49" />
                                <stop offset="0.49" stopColor="#939393" stopOpacity="0.66" />
                                <stop offset="0.55" stopColor="#939393" stopOpacity="0.72" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_73_56" x1="46.7119" y1="25.8385" x2="93.5312" y2="27.1484" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F29BA9" />
                                <stop offset="1" stopColor="#FDEDEF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_73_56" x1="19.4963" y1="56.3925" x2="154.133" y2="75.6461" gradientUnits="userSpaceOnUse">
                                <stop offset="0.19" stopColor="#F29BA9" />
                                <stop offset="1" stopColor="#FDEDEF" />
                            </linearGradient>
                            <clipPath id="clip0_73_56">
                                <rect width="136" height="98" fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='elements__switch'>
                        <label className="switch js-night-toggle">
                            <input className="switch__checkbox js-night-checkbox" type="checkbox" />
                            <span className="switch__toggle">
                            </span>
                        </label>
                    </div>
                </div>
                <div className='profile'>
                    <div className='profile__paragraph'>
                        <h1>
                            Hola, mi nombre es <span>Diana.</span> <br/>
                        </h1>
                        <h2>
                            Soy desarrolladora y diseñadora 
                            me encanta la ilustración, animación y
                            realizar cosas interactivas.
                        </h2>
                    </div>
                    <div className='profile__fondofoto'>
                        <svg className='profile__fondo' width="276" height="276" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M138 276C214.215 276 276 214.215 276 138C276 61.7847 214.215 0 138 0C61.7847 0 0 61.7847 0 138C0 214.215 61.7847 276 138 276Z"
                                fill="#A32FFF"/>
                            <path opacity="0.4" d="M138 253.002C201.514 253.002 253.002 201.514 253.002 138C253.002 74.486 201.514 22.9978 138 22.9978C74.486 22.9978 22.9978 74.486 22.9978 138C22.9978 201.514 74.486 253.002 138 253.002Z"
                                fill="#A32FFF"/>
                            <path d="M138 228.466C187.963 228.466 228.466 187.963 228.466 138C228.466 88.037 187.963 47.5341 138 47.5341C88.037 47.5341 47.5341 88.037 47.5341 138C47.5341 187.963 88.037 228.466 138 228.466Z"
                                fill="#A32FFF"/>
                        </svg>
                        <img className='profile__foto' src={foto}/>
                    </div>
                </div>
                <div className='ornament'>
                    <img className='ornament_img'src={shelf}></img>
                </div>
            </div>
        </div>
    );
}

export default Home;