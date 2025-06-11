import Header from "../components/Header";
import Tecnologies from "../components/Tecnologies";

function Projetos() {
    return (
        <div>
            <Header />
            <div className="bg-gray-900 w-full h-screen flex items-center justify-center px-16 gap-1.5">
                <div className="bg-gray-800 w-1/2 h-1/2 flex items-center justify-center border-2 hover:border-green-500 transition-all duration-300 cursor-pointer rounded-2xl">
                    <h2>Projeto 1</h2>
                </div>
                <div className="bg-gray-800 w-1/2 h-1/2 flex items-center justify-center border-2 hover:border-green-500 transition-all duration-300 cursor-pointer rounded-2xl ">
                    <h2>Projeto 2</h2>
                </div>
                <div className="bg-gray-800 w-1/2 h-1/2 flex items-center justify-center  border-2 hover:border-green-500 transition-all duration-300 cursor-pointer rounded-2xl">
                    <h2>Projeto 3</h2>
                </div>
            </div>
        </div>
    )
}

export default Projetos