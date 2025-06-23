import Header from "../components/Header";

function Contato() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Header />
            <div className="w-full flex justify-center mb-0 pb-0 mt-2 ">
                <h2 className="text-white p-5 text-2xl">Preencha o formulário e retornarei em breve. </h2>
            </div>
            <div className="flex justify-center items-center h-2/3" >
                <form className="bg-slate-400 flex flex-col w-100 p-6 rounded-xl shadow-lg space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm text-gray-800 mb-1">Digite seu nome</label>
                        <input name="name" className="bg-slate-100 rounded-xl p-2" type="text" placeholder="ex: Fulano da Silva" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name-business" className="text-sm text-gray-800 mb-1">Nome da empresa</label>
                        <input name="name-business" className="bg-slate-100 rounded-xl p-2" type="text" placeholder="opcional" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm text-gray-800 mb-1">Digite seu e-mail</label>
                        <input name="email" className="bg-slate-100 rounded-xl p-2" type="email" placeholder="ex: teste@gmail.com" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="tel" className="text-sm text-gray-800 mb-1">Digite seu número para contato</label>
                        <input name="tel" className="bg-slate-100 rounded-xl p-2" type="tel" placeholder="ex: (99) 9999-9999" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="txt-area" className="text-sm text-gray-800 mb-1">Informações adicionais (opcional)</label>
                        <textarea name="txt-area" className="bg-slate-100 rounded-xl p-2" placeholder="Digite aqui sua mensagem..."></textarea>
                    </div>

                    <button className="bg-green-500 text-white rounded-xl p-2 hover:bg-green-600 transition">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contato;
