import { Instagram, Twitter, Facebook, PlayCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import homeBanner from "../assets/homeBanner.png"
import verify from "../assets/verify.png";
import prudential from "../assets/logos/prudential.png";
import linkedIn from "../assets/logos/linkedIn.png";
import microsoft from "../assets/logos/microsoft.png";
import zoover from "../assets/logos/zoover.png";

const MainSection = () => {
    return (
        <main className='main-section'>
            <div className="main-background-filter px-4 pt-48">
                <div className="max-w-7xl mx-auto">
                    <div className='flex flex-col lg:flex-row-reverse lg:justify-between'>
                        <img src={homeBanner}  draggable={false} alt="Home Banner" className="-mt-20 lg:mr-20" />
                        <div className="flex flex-col-reverse gap-x-7 lg:flex-row lg:w-1/2">
                            <div className='flex justify-around items-center gap-3.5 mt-16 lg:flex-col lg:justify-start'>
                                <Link to="/" className='text-xs text-center font-semibold lg:rotate-90 lg:mb-2'><span >Follow Us</span></Link>
                                <Link to="/"><Instagram className="!h-4 !w-4" /></Link>
                                <Link to="/"><Twitter className="!h-4 !w-4" /></Link>
                                <Link to="/"><Facebook className="!h-4 !w-4" /></Link>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-x-3">
                                    <img src={verify} alt="Verify Icon" />
                                    <h3 className="text-sm font-bold text-[#F07922] mb-1">Mejor performance de talent management</h3>
                                </div>
                                <h1 className="text-5xl font-bold tracking-wide mb-4">
                                    Impulsa
                                    <span className="text-[#F07922]">{` tu `}</span>
                                    Carerra y
                                    <span className="text-[#F07922]">{` tus `}</span>
                                    Oportunidades
                                </h1>
                                <p className="text-sm leading-6 mb-6">Destacar en el competitivo mundo laboral es muy difícil. Nosotros hacemos realidad ese sueño con nuestro expertise en confección de CV, perfil de LinkedIn y estrategias de entrevistas personalizadas. Potenciamos tus oportunidades profesionales y te ayudamos a alcanzar el éxito que mereces.</p>
                                <div className="flex flex-col items-center lg:flex-row gap-7">
                                    <HashLink to="/#services" className="py-3.5 px-11 font-bold leading-6 rounded-full bg-gradient-to-r from-[#460082] to-[#3D235A]">
                                        Get Started
                                    </HashLink>
                                    <Link to="/" className="py-3.5 px-11 font-bold leading-6 rounded-full flex items-center gap-x-2.5">
                                        <PlayCircle className="h-3 w-3" />
                                        Ver Vídeo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-8 items-center mt-8 pb-4 lg:mt-1">
                        <Link to="/"><img className="w-28" src={prudential} alt="Prudential's Logo" /></Link>
                        <Link to="/"><img className="w-28" src={linkedIn} alt="LinkedIn's Logo" /></Link>
                        <Link to="/"><img className="w-28" src={microsoft} alt="Microsoft Logo" /></Link>
                        <Link to="/"><img className="w-28" src={zoover} alt="Zoover's Logo" /></Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainSection;