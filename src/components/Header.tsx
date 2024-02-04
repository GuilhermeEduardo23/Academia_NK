

const Header = () => {
  return (
    <header className="text-white flex items-center justify-between p-4">
        <h1 className="font-bold text-lg">Academia N<span className="text-[#f58634]">K</span></h1>

        <nav>
            <ul className="flex gap-[2rem]">
              <li>
                <a href="#home" className="links linksHover">Início</a>
              </li>
              <li>
                <a href="#photos" className="links linksHover">Fotos</a>
              </li>
              <li>
                <a href="#location" className="links linksHover">Onde Estamos</a>
              </li>
              <li>
                <a href="#contact" className="links linksHover">Contato</a>
              </li>
            </ul>

            <div>
              <button>

              </button>
              <button></button>
            </div>
        </nav>
    </header>
  )
}

export default Header;