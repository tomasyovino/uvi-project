import { useState } from 'react';

const Form = ({ cards }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [plan, setPlan] = useState("");
    const [error, setError] = useState({});

    const onPlanChange = (planTitle) => {
        if (planTitle === plan) return setPlan("");
        return setPlan(planTitle);
    };

    const validate = () => {
        let errors = {};
        if (!firstName) errors.firstName = "* Nombre es requerido";
        if (!lastName) errors.lastName = "* Apellido es requerido";
        if (!email) errors.email = "* Email es requerido";
        if (!phone) errors.phone = "* Teléfono es requerido";
        if (!plan) errors.plan = "* Plan es requerido"
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const sendForm = (e) => {
        try {
            e.preventDefault();
            if (!validate()) return;

            const simulatedPost = {
                firstName,
                lastName,
                email,
                phone,
                plan
            };
            console.log(simulatedPost);
        } catch (error) {
            
        } finally {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setPlan("");
        };
    }

    return (
        <div className='lg:mt-10'>
            <h3 className='w-2/3 text-4xl font-bold mb-8'>Sé parte de nuestra familia</h3>
            <form className='flex flex-col gap-4' onSubmit={sendForm}>
                <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
                    <div className='lg:w-[45%] flex flex-col gap-2'>
                        <label className='text-sm font-medium'>Nombre</label>
                        <input 
                            className='px-2 py-2.5 text-black bg-[#FFF8F8] rounded'
                            type="text"
                            placeholder='Ingresa tu nombre'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {
                            error.firstName &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.firstName}</p>
                        }
                    </div>
                    <div className='lg:w-[45%] flex flex-col gap-2'>
                        <label className='text-sm font-medium'>Apellido</label>
                        <input 
                            className='px-2 py-2.5 text-black bg-[#FFF8F8] rounded'
                            type="text"
                            placeholder='Ingresa tu apellido'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {
                            error.lastName &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.lastName}</p>
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Email</label>
                    <input 
                        className='px-2 py-2.5 text-black bg-[#FFF8F8] rounded'
                        type="email"
                        placeholder='Ingresa tu correo electrónico'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        error.email &&
                            <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.email}</p>
                    }
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Teléfono</label>
                    <input 
                        className='px-2 py-2.5 text-black bg-[#FFF8F8] rounded'
                        type="tel"
                        placeholder='Ingresa tu número de teléfono'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {
                        error.phone &&
                            <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.phone}</p>
                    }
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Elige tu plan</label>
                    <div className='flex justify-between'>
                        {
                            cards.map((card, i) => (
                                <button
                                    key={i}
                                    type='button'
                                    className={
                                        plan === card.title
                                            ? "py-3.5 px-6 lg:px-10 text-white font-bold leading-6 rounded-full bg-gradient-to-r from-[#7721BF] to-[#3D235A] border-[#460082] shadow-xl shadow-indigo-500/50"
                                            : 'py-3.5 px-6 lg:px-10 text-white font-bold leading-6 rounded-full bg-gradient-to-r from-[#7721BF] to-[#3D235A] border-[#460082]'
                                        }
                                    onClick={() => onPlanChange(card.title)}
                                >
                                    {card.title}
                                </button>
                            ))
                        }
                    </div>
                    {
                        error.plan &&
                            <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.plan}</p>
                    }
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='text-sm font-medium'>Selecciona un archivo</label>
                    <div className='relative rounded-md shadow-sm'>
                        <input type="file" className='sr-only' id="file-upload" />
                        <label htmlFor="file-upload" className="py-2 px-3 border border-transparent rounded-md font-medium text-white bg-gradient-to-r from-[#460082] to-[#3D235A] cursor-pointer">
                            <span>Seleccionar Archivo</span>
                        </label>
                    </div>
                </div>
                <div className='flex justify-end mt-2'>
                    <button className="py-2 px-8 text-white font-bold leading-6 rounded bg-gradient-to-r from-[#460082] to-[#3D235A]" type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Form;