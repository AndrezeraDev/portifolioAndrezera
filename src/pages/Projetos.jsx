import Header from "../components/Header";

function Projetos() {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 w-full min-h-screen flex flex-wrap justify-center items-center gap-6 px-8 py-12">
        
        {/* Projeto 1 - PICON */}
        <div className="relative w-full md:w-[30%] h-[300px] rounded-2xl overflow-hidden group cursor-pointer border-2 hover:border-green-500 transition-all duration-300">
          
          <img
            src="./src/assets/images/projects/picon.png"
            alt="site corretora de seguros picon"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <h3 className="text-xl font-bold mb-2">PICON - Formulário Médico</h3>
            <p className="text-sm">
              Projeto para corretora com formulário de checklist para facilitar o atendimento aos clientes antes da cotação.
              Desenvolvido com HTML, CSS e JavaScript + envio de e-mail após preenchimento com EmailJs + Area administrativa com login em PHP
            </p>
            <a
              href="https://picon.com.br/formulario/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              Ver Projeto
            </a>
          </div>
        </div>

        {/* Projeto 2 - PrevTempo */}
        <div className="relative w-full md:w-[30%] h-[300px] rounded-2xl overflow-hidden group cursor-pointer border-2 hover:border-green-500 transition-all duration-300">
          <img
            src="./src/assets/images/projects/prev-tempo.png"
            alt="prev tempo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <h3 className="text-xl font-bold mb-2">PrevTempo</h3>
            <p className="text-sm">
              Aplicação que consulta a previsão do tempo de uma cidade. Contruido com HTML, CSS e JavaScript + Node consumindo API do OpenWeather.
            </p>
            <a
              href="https://previsao-tempo-api-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              Ver Projeto
            </a>
          </div>
        </div>

        {/* Projeto 3 - ToDo App */}
        <div className="relative w-full md:w-[30%] h-[300px] rounded-2xl overflow-hidden group cursor-pointer border-2 hover:border-green-500 transition-all duration-300">
          <img
            src="./src/assets/images/projects/todo.png"
            alt="todo app"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <h3 className="text-xl font-bold mb-2">ToDo App</h3>
            <p className="text-sm">
              Lista de tarefas com adição, exclusão e status + ver detalhes.
              Desenvolvido com Vite + React, Tailwind, ReactRouter
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              Ver Projeto
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projetos;
