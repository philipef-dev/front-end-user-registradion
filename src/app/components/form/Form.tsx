const Form = () => {
    function handleSubmit (e:React.FormEvent) {
        e.preventDefault();
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
)}

export default Form