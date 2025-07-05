import Header from "../components/Header";

function Contato() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Header />
            <div className="w-full flex justify-center mb-0 pb-0 mt-2 ">
                <h2 className="text-white p-2 text-2xl font-mono animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-500 pr-5 ">Preencha o formulário e entraremos em contato com você. </h2>
            </div>
            <div className="flex justify-center items-center h-2/3" >
                <form className="bg-slate-400 flex flex-col w-100 p-6 rounded-xl shadow-lg space-y-4">
                    <div className="flex flex-col">
                        <input name="name" className="bg-slate-100 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="ex: Fulano da Silva" />
                    </div>

                    <div className="flex flex-col">
                        <input name="name-business" className="bg-slate-100 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Nome da empresa (opcional)" />
                    </div>

                    <div className="flex flex-col">
                        <input name="email" className="bg-slate-100 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="email" placeholder="ex: teste@gmail.com" />
                    </div>

                    <div className="flex flex-col">
                        <input name="tel" className="bg-slate-100 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="tel" placeholder="ex: (99) 9999-9999" />
                    </div>

                    <div className="flex flex-col">
                        <textarea name="txt-area" className="bg-slate-100 rounded-xl p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Digite aqui sua mensagem..."></textarea>
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
