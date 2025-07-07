import { Download } from 'lucide-react';


function Curriculo() {
    return (
        <div className="bg-gray-950 min-h-screen py-16 px-6" id="sobre">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Sobre mim */}
                <aside className="md:w-1/2 w-full bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-green-500 transition-shadow duration-300">
                    <h2 className="text-green-400 text-2xl font-mono font-bold mb-4">
                        Sobre Mim
                    </h2>
                    <p className="text-white text-lg leading-relaxed font-light">
                        Me chamo <span className="text-green-400 font-semibold">André Souza</span>, tenho 21 anos e sou Desenvolvedor Front-End.<br /><br />
                        Atualmente trabalho na empresa <span className="text-green-400 font-semibold">VendaSeguro</span> como Desenvolvedor Web, atuando com manutenção e criação de sistemas.<br /><br />
                        Essa é minha primeira experiência na área de TI. Estou cursando Análise e Desenvolvimento de Sistemas e me especializando em Front-End, com o objetivo de me tornar um desenvolvedor completo.
                    </p>

                    {/* Me acompanhe no linkedin */}
                    <div className="mt-6">
                        <a
                            href="https://www.linkedin.com/in/andre-luis-de-souza-33ba7a268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-sm hover:text-green-500 hover:underline transition"
                        >
                         clique aqui e me acompanhe no LinkedIn
                        </a>
                    </div>
                </aside>

                {/* Download do currículo */}
                <aside className="md:w-1/2 w-full bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-green-500 transition-shadow duration-300 flex flex-col items-center justify-center">
                    <h3 className="text-white text-xl font-mono mb-6 text-center">
                        Faça o <span className="text-green-400 font-semibold">download</span> do meu currículo clicando no botão abaixo:
                    </h3>
                    <a
                        href="/src/assets/pdf/importante-curriculo-Andre-Souza.pdf" // coloque aqui o path correto do arquivo
                        download
                        className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition text-lg font-semibold flex mr-1"
                    >
                        Download Currículo <Download size={22} color="#ffffff" className="ml-2 "/>
                    </a>
                </aside>
            </div>
        </div>
    );
}

export default Curriculo;
