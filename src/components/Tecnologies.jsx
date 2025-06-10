function Tecnologies(){
    return(
        <div className="bg-gray-900 w-full h-screen flex items-center justify-center px-16 flex-col">
            {/* Cards com as tecnologias usadas html5, javascript, react, reactrouter, tailwindcss */}
            <h1 className="text-white text-3xl font-bold font-mono">Tenho conhecimento em</h1>
            <div className="grid grid-cols-4 gap-4 mt-0 ">
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img src="./src/assets/images/icons/html5.svg" alt="logo html5"  
                    className="w-18 h-18 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300"/>
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-18 h-18 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/css3.svg" alt="logo css3" />
                </div>    
            </div>
        </div>
    )
}

export default Tecnologies