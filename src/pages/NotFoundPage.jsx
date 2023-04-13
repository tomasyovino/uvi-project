import { Link } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";
import uviBackgrounded from "../assets/logos/uviBackgrounded.png";

const NotFoundPage = () => {
    return (
        <section className='mx-auto pt-5 lg:pt-48 flex justify-center items-center flex-col min-h-[100vh] bg-gradient-to-br from-[#282C4B] to-[#000000]'>
            <div className="flex flex-col lg:flex-row max-w-7xl gap-8 items-center justify-center lg:divide-x-2">
                <img className="w-32 lg:w-56" src={uviBackgrounded} alt="Uvi's logo" />
                <div className="flex flex-col gap-4 justify-between items-center lg:items-end">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-end lg:items-end gap-2">
                        <h1 className="text-9xl font-bold">404</h1>
                        <div className="flex flex-col gap-1 lg:w-1/3">
                            <h2 className="text-2xl font-semibold">¡Ups!</h2>
                            <h6 className="text-lg font-semibold">La página que estás buscando no existe.</h6>
                        </div>
                    </div>
                    <Link to="/" className="font-semibold flex items-center gap-2 mr-6">
                        <KeyboardBackspace sx={{ fontSize: "2rem" }} />
                        <span className="text-3xl">Atrás</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;