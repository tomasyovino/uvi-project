import uviBackgrounded from "../assets/logos/uviBackgrounded.png";
import { Link } from "react-router-dom";
import { LinkedIn, AlternateEmail, Facebook, } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className='mx-auto text-xs py-11 px-24 flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:divide-x bg-gradient-to-br lg:bg-gradient-to-r from-[#282C4B] to-[#000000]'>
            <div className="lg:w-1/3">
                <img src={uviBackgrounded} alt="Uvi's Logo" className="w-16" />
            </div>
            <div className="flex flex-col-reverse gap-6 justify-between items-center lg:flex-row lg:w-2/3 lg:gap-0">
                <div className="lg:w-1/2 flex flex-col justify-center items-center gap-2">
                    <span>© Copyright 2023 Uvi All right reserved</span>
                    <span>Created by <a href='https://tomasyovino.vercel.app' target="_blank" rel='noreferrer'>Tomás Yovino</a></span>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-2 lg:flex-row items-center justify-between">
                    <div className="flex gap-10">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms</Link>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Get in Touch</span>
                        <Link to="/"><Facebook /></Link>
                        <a
                            href='https://www.linkedin.com/company/universo-i/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </a>
                        <a
                            href='mailto:info@uvi.com.ar'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AlternateEmail />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;