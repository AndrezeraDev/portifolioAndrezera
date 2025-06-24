

function Footer(){
    return(
        <div className="mb-10 ">
            <div className="bg-gray-900 w-full h-1/2 flex items-center justify-center px-16 gap-1.5">
            <div className="bg-gray-900 w-1/3 p-16 ">
                <div className="text-3xl text-white">Redes Sociais</div>
                <div className="text-2xl ">
                    <a  className="text-white" href="https://www.instagram.com/andrezeradev/">Instagram</a>
                </div>
                <div className="text-2xl text-white">Linkedin</div>
                <div className="text-2xl text-white">GitHub</div>
            </div>
            <div className="bg-gray-900 w-1/3 p-16 flex flex-col justify-center text-center" >
                <div className="text-2xl text-white">© Todos os direitos reservados | 2025 AndrezeraDev</div>
            </div>
            <div className="bg-gray-900 w-1/3 p-16 ">
                <div className="text-3xl text-white">conteudo direita</div>
            </div>
            </div>
        </div>
    )
}

export default Footer