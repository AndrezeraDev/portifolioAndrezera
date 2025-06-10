function Body() {
    return (
        <div className="bg-gray-900 w-full h-screen flex items-center justify-between px-16">
            {/* Texto à esquerda */}
            <div>
                <h1 className="text-white text-5xl font-bold font-mono leading-snug">
                    Olá! <br /> <p className="text-green-500 italic">Eu sou André Souza</p>
                    <p>Desenvolvedor Front-End</p>
                </h1>
                <button 
                onClick={() => window.location.href = "/projetos"}
                className="bg-green-500 text-xl font-bold  text-black px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 cursor-pointer mt-2.5">
                Ver Projetos
                </button>

            </div>

            {/* Imagem à direita com efeito blob */}
            <div>
                <img
                    src="./src/assets/images/perfil.jpg"
                    alt="Foto de perfil"
                    className="w-96 h-96 object-cover shadow-lg hover:scale-105 cursor-pointer border-4 border-green-500"
                    style={{
                        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                        transition: "0.5s ease-in-out",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderRadius = "50% 50% 50% 50% / 50% 50% 50% 50%"}
                    onMouseLeave={(e) => e.currentTarget.style.borderRadius = "60% 40% 30% 70% / 60% 30% 70% 40%"}
                />
            </div>
        </div>
    );
}

export default Body;
