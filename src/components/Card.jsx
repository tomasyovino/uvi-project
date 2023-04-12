import uviBackgrounded from "../assets/logos/uviBackgrounded.png";
import { PlanState } from "../context/PlanProvider";

const Card = ({ title, price, list, i }) => {
    const { setPlan } = PlanState();

    const selectPlan = (planSelected) => {
        setPlan(planSelected);
        const formulary = document.getElementById("formulary");
        formulary.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div
                className={
                    i == "1"
                        ? 'flex flex-col max-w-[320px] bg-white text-[#221E13] lg:-mt-36 py-2 px-8 rounded shadow-lg mx-auto shadow-indigo-500/50'
                        : 'flex flex-col max-w-[320px] bg-white text-[#221E13] lg:-mt-20 py-2 px-8 rounded shadow-lg mx-auto shadow-indigo-500/50'}
            >
                <img src={uviBackgrounded} alt={`${title} card`} draggable={false} />
                <div className='flex justify-between items-center pt-6 pb-2 px-2'>
                    <span className='text-xl font-semibold'>{title}</span>
                    <span className='text-xs  text-[#F07922] font-bold'>${price}</span>
                </div>
                <ol className='ml-5 p-2 list-disc text-sm text-[#64625A]'>
                    {
                        list.map((elem, i) => (
                            <li key={i}>{elem}</li>
                        ))
                    }
                </ol>
                <div className='w-full flex justify-end p-2'>
                    <button
                        className='py-3.5 px-6 text-white font-bold leading-6 rounded-full bg-gradient-to-r from-[#460082] to-[#3D235A]'
                        onClick={() => selectPlan(title)}
                    >
                        Adquirir
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;