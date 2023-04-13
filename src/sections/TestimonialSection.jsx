import React from 'react';
import TestimonialContainer from '../containers/TestimonialContainer';

const testimonials = [
    {
        picture: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1681391396/Uvi/person1_c5cdk0.webp",
        name: "Clarissa",
        job: "Ingeniera de software",
        rating: 5,
        title: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional.",
        comment: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional, destacó mi CV, optimizó mi perfil de LinkedIn."
    },
    {
        picture: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1681391396/Uvi/person2_nda26j.webp",
        name: "Jonathan",
        job: "Fisioterapeuta",
        rating: 5,
        title: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional.",
        comment: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional, destacó mi CV, optimizó mi perfil de LinkedIn."
    },
    {
        picture: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1681391396/Uvi/person3_yzrtxc.webp",
        name: "Cristine",
        job: "Agente de seguros",
        rating: 4.5,
        title: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional.",
        comment: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional, destacó mi CV, optimizó mi perfil de LinkedIn."
    },
    {
        picture: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1681397933/Uvi/kitchen-bar_eg24bc.webp",
        name: "Daniel",
        job: "Chef",
        rating: 5,
        title: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional.",
        comment: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional, destacó mi CV, optimizó mi perfil de LinkedIn."
    },
    {
        picture: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1681397933/Uvi/bm3bojj9kfdnbirqc9ty_vzloyj.webp",
        name: "Luis",
        job: "Actor",
        rating: 4,
        title: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional.",
        comment: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional, destacó mi CV, optimizó mi perfil de LinkedIn."
    },
    {
        picture: "https://res.cloudinary.com/dtyrld6tv/image/upload/v1681397933/Uvi/gxrw9vtickx1xovopzhe_wcnldm.webp",
        name: "Sofia",
        job: "Especialista en ciberseguridad",
        rating: 5,
        title: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional.",
        comment: "¡Experiencia increíble con la de confección de CV! Servicio personalizado y profesional, destacó mi CV, optimizó mi perfil de LinkedIn."
    }
];

const TestimonialSection = () => {
    return (
        <section className='testimonial-section' id='testimonial'>
            <div className='testimonial-background-filter px-4 pt-8 pb-24'>
                <div className='max-w-7xl mx-auto'>
                    <div className='mb-14 flex flex-col items-start gap-2 max-w-xs'>
                        <h5 className='text-[#F17216] text-xs font-bold'>TESTIMONIOS</h5>
                        <h5 className='text-2xl font-bold'>Qué dicen nuestros consumidores</h5>
                    </div>
                    <TestimonialContainer testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;