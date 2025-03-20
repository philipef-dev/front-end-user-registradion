import { useState } from "react";

const EditUserModal = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
    }

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Editar Usuário</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}

            {user && (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block">Nome:</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block">E-mail:</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded-md"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="age" className="block">Idade:</label>
                        <input
                            id="age"
                            type="number"
                            className="w-full px-3 py-2 border rounded-md"
                            value={user.age}
                            onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded-md"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            disabled={loading}
                        >
                            {loading ? "Salvando..." : "Salvar"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    </div>
  )
};




export default EditUserModal;