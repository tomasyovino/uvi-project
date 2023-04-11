import { useState } from 'react';
import { Dialog, Popover } from "@headlessui/react";
import { Close, Menu } from "@mui/icons-material"
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import uviLogo from "../assets/logos/uvi.png";
import uviBackgroundedLogo from "../assets/logos/uviBackgrounded.png";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='bg-[#3D235A]/[0.7] fixed top-0 w-full'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global'>
                <div className='flex lg:flex-1'>
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img className='h-8' src={uviLogo} alt="Uvi's logo" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#FFFFFF]"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:items-center">
                    <Link to={"/"} className="font-normal leading-6 ease-in-out duration-300 hover:text-[#F07922]">
                        Inicio
                    </Link>
                    <HashLink to="/#services" className="font-normal leading-6 ease-in-out duration-300 hover:text-[#F07922]">
                        Servicios
                    </HashLink>
                    <HashLink to="/#testimonial" className="font-normal leading-6 ease-in-out duration-300 hover:text-[#F07922]">
                        Testimonios
                    </HashLink>
                    <Link to="/" className="py-3.5 px-7 text-[#282C4B] font-bold leading-6 bg-white rounded-full">
                        ¡Contáctanos!
                    </Link>
                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                                className="h-8 w-auto"
                                src={uviBackgroundedLogo}
                                alt="Uvi's logo"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <Close className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Inicio
                                </Link>
                                <HashLink
                                    to={"/#services"}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Servicios
                                </HashLink>
                                <HashLink
                                    to={"/#testimonial"}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Testimonios
                                </HashLink>
                                <Link to="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    ¡Contáctanos!
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;