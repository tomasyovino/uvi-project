import { useState } from 'react';
import { PlanState } from '../context/PlanProvider';

const Form = ({ cards }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { plan, setPlan } = PlanState("");
    const [file, setFile] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
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
        if (!plan) errors.plan = "* Plan es requerido";
        if (!file[0]) errors.file = "* Archivo es requerido";
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const sendForm = (e) => {
        try {
            e.preventDefault();
            if (!validate()) return;

            setIsLoading(true);

            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("plan", plan);
            formData.append("file", file[0].name);

            console.log("Data sending simulation:");
            for (let entry of formData.entries()) {
                console.log(entry[0] + ": " + entry[1]);
            };
        } catch (error) {
            console.log(error);
        } finally {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setPlan("");
            setFile([]);
            setIsLoading(false);
        };
    };

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
                    <div className='flex items-center gap-2'>
                        <label className='text-sm font-medium'>Elige tu plan</label>
                        {
                            plan && <p className='text-sm font-medium'>{`(${plan} seleccionado).`}</p>
                        }
                    </div>
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
                    <div className='flex items-center gap-2'>
                        <label className='text-sm font-medium'>Selecciona un archivo</label>
                        {
                            file.length >= 1 && <p className='text-sm font-medium'>
                               {`(${file[0].name.substring(0, 20)}${file[0].name.length > 20 ? "..." : ""})`}
                            </p>
                        }
                    </div>
                    <div className='relative rounded-md shadow-sm flex flex-col items-start gap-1'>
                        <input
                            type="file"
                            className='sr-only'
                            id="file-upload"
                            onChange={(e) => setFile(e.target.files)}
                        />
                        <label htmlFor="file-upload" className="py-2 px-3 border border-transparent rounded-md font-medium text-white bg-gradient-to-r from-[#460082] to-[#3D235A] cursor-pointer">
                            <span>Seleccionar Archivo</span>
                        </label>
                        {
                            error.file &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.file}</p>
                        }
                    </div>
                </div>
                <div className='flex justify-end mt-2'>
                    <button className="py-2 px-8 text-white font-bold leading-6 rounded bg-gradient-to-r from-[#460082] to-[#3D235A] flex items-center gap-1" type='submit'>
                        {
                            isLoading
                                ?
                                    <>
                                        <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        Enviando
                                    </>
                                : "Enviar"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;