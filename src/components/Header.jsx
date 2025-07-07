

function Header(){
    return(
        <div className="flex items-center justify-between bg-gray-900 h-20 sticky top-0 p-15 shadow-md z-50">
            <h1 className="text-white text-3xl font-bold font-mono italic flex">Andrezera<p className="text-green-500">Dev</p></h1>
            <ul className="flex gap-4 ">
                <li className="hover:text-green-500 text-white text-xl transition-all font-mono"><a href="/">Home</a></li>
                <li className="hover:text-green-500 text-white text-xl transition-all font-mono  "><a href="/projetos">Projetos</a></li>
                <li className="hover:text-green-500 text-white text-xl transition-all font-mono" ><a href="#sobre">Sobre</a></li>
                <li className="hover:text-green-500 text-white text-xl transition-all font-mono"><a href="/contato">Contato</a></li>
            </ul>
        </div>

    )
}

export default Header