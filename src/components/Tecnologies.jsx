function Tecnologies(){ 
    return(
        <div className="bg-gray-900 w-full h-1/2 flex items-center justify-center px-16 flex-col mt-0 pt-0 mb-20" id="push">
            {/* Cards com as tecnologias usadas html5, javascript, react, reactrouter, tailwindcss */}
            
            <h1 className="text-white text-4xl font-bold font-mono mb-10 border-2 border-b-green-500 hover:border-green-500 transition-all duration-300 rounded-full p-4">Skills & Tecnologias</h1>
            <div className="grid grid-cols-4 gap-7 mt-0 ">
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img src="./src/assets/images/icons/html5.svg" alt="logo html5"  
                    className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300"/>
                    
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/css-4.svg" alt="logo css3" />
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/tailwindcss.svg" alt="logo tailwindcss" />
                </div>  
                <div className="bg-gray-800 p-4 rounded-2xl">    
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/javascript.svg" alt="logo javascript" />  
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/react.svg" alt="logo react" />
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/reactrouter.svg" alt="logo reactrouter" />
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/github.svg" alt="logo github" />
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/bootstrap.svg" alt="logo bootstrap" />
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/wordpress.svg" alt="logo Wordpress" />
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <img className="w-24 h-24 object-cover shadow-lg hover:scale-105 cursor-pointer p-4 border-2 border-green-500 rounded-2xl transition-all duration-300" 
                    src="./src/assets/images/icons/elementor.svg" alt="logo Elementor" />
                </div>
            </div>
        </div>
    )
}

export default Tecnologies