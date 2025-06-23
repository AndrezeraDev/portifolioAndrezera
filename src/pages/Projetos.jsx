import Header from "../components/Header";
import Tecnologies from "../components/Tecnologies";

function Projetos() {
    return (
        <div>
            <Header />
            <div className="bg-gray-900 w-full h-screen flex items-center justify-center px-16 gap-1.5">
                <div className="bg-gray-800 w-1/2 hover:w-1/1 h-1/2 flex items-center justify-center border-2 hover:border-green-500 transition-all duration-300 cursor-pointer rounded-2xl">
                    <img className="w-full h-full object-cover rounded-2xl" src="./src/assets/images/projects/picon.png" alt="site corretora de seguros picon - formulário de contato" />
                </div>
                <div className="bg-gray-800 w-1/2 hover:w-1/1 h-1/2 flex items-center justify-center border-2 hover:border-green-500 transition-all duration-300 cursor-pointer rounded-2xl">
                    <img className="w-full h-full object-cover rounded-2xl" src="./src/assets/images/projects/prev-tempo.png" alt="site corretora de seguros picon - formulário de contato" />
                </div>
                <div className="bg-gray-800 w-1/2 hover:w-1/1 h-1/2 flex items-center justify-center border-2 hover:border-green-500 transition-all duration-300 cursor-pointer rounded-2xl">
                    <img className="w-full h-full object-cover rounded-2xl" src="./src/assets/images/projects/todo.png" alt="site corretora de seguros picon - formulário de contato" />
                </div>
            </div>
        </div>
    )
}

export default Projetos