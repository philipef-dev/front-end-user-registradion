import { useState } from 'react';
import { User } from '@/types/user';

interface FormProps {
    onSubmit: (newUser: User) => void;
};

const Form = ({ onSubmit }: FormProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    
    function clearForm() {
        setName('');
        setEmail('');
        setAge(0);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newUser: User = { name, email, age };
        onSubmit(newUser);
        clearForm()
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md w-1/3 h-full mb-4" >
                <h1 className="text-2xl text-center mb-4 font-semibold">
                    Cadastro de Usuários
                </h1>
                <div className="mb-2">
                    <label
                        htmlFor="name"
                        className=" block font-medium text-sm text-gray-700"
                    >
                        Nome:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 required"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className=" block font-medium text-sm text-gray-700"
                    >
                        E-mail:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 required"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="age"
                        className=" block font-medium text-sm text-gray-700"
                    >
                        Idade:
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="border border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300 required"
                    />
                </div>
                <div className="mt-4 text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-all rounded-md"
                    >
                        Salvar
                    </button>
                </div>
            </form >
        </>
    )
}

export default Form