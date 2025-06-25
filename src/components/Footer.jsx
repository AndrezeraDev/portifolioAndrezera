function Footer(){
    return(
        <footer className="w-full bg-gray-900 mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    
                    {/* Seção Redes Sociais */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
                        <div className="space-y-2">
                            <div>
                                <a 
                                    href="https://www.instagram.com/andrezeradev/" 
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </div>
                            <div>
                                <a 
                                    href="https://www.linkedin.com/in/andre-luis-de-souza-33ba7a268/" 
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div>
                                <a 
                                    href="https://github.com/AndrezeraDev" 
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Seção Central - Copyright */}
                    <div className="text-center flex flex-col mt-23">
                        <p className="text-sm text-gray-400">
                            © 2025 AndrezeraDev
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Todos os direitos reservados
                        </p>
                    </div>

                    {/* Seção Direita */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <div>andrezera.dev@gmail.com</div>
                            <div>+55 (54) 98125-3494</div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="border-t border-green-500 mt-6 pt-4 text-center">
                    <p className="text-xs text-gray-500">
                        Desenvolvido com ❤️ por AndrezeraDev
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer