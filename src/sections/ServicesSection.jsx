import servicesBanner from "../assets/servicesBanner.png";
import contactBanner from "../assets/contactBanner.png";
import { Form } from "../components";
import CardsContainer from "../containers/CardsContainer";

const cards = [
    {
        title: "Plan 1",
        price: 349.99,
        list: ["Parking Lot Attendants", "Country Clubs, Hotel Parking Management", "Concert & Festival Parking Management", "Restaurants"]
    },
    {
        title: "Plan 2",
        price: 299.99,
        list: ["Parking Lot Attendants", "Country Clubs, Hotel Parking Management", "Concert & Festival Parking Management", "Restaurants"]
    },
    {
        title: "Plan 3",
        price: 279.99,
        list: ["Parking Lot Attendants", "Country Clubs, Hotel Parking Management", "Concert & Festival Parking Management", "Restaurants"]
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="services-section mx-auto">
            <div className="services-background-filter pt-8 mx-auto">
                <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-16 lg:flex-row">
                    <img src={servicesBanner} alt="Services Banner" />
                    <div className="lg:w-1/3">
                        <h5 className="text-xs text-[#F07922] mb-2.5 font-bold">SERVICIOS</h5>
                        <h4 className="text-2xl font-bold mb-3.5">¿Qué tenemos para ti?</h4>
                        <p className="text-sm">Nuestros servicios de confección de CV, optimización de LinkedIn y entrenamiento en entrevistas potenciarán tus oportunidades profesionales y te ayudarán a destacar en el competitivo mundo laboral.</p>
                    </div>
                </div>
                <CardsContainer cards={cards} />
                <div className="max-w-7xl p-4 flex flex-col items-start lg:justify-around lg:flex-row mx-auto" id='formulary'>
                    <img className="hidden lg:block" src={contactBanner} alt="Contact Banner" />
                    <Form cards={cards} />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;