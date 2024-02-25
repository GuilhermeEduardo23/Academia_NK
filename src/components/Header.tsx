import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoIosMenu, IoMdClose } from "react-icons/io";

interface link {
  id: string;
  href: string;
  description: string;
}

const Header = () => {
  const links: Array<link> = [
    {id: '1', href: '#home', description: 'Início'},
    {id: '2', href: '#photos', description: 'Fotos'},
    {id: '3', href: '#location', description: 'Onde Estamos'},
  ]

  const [click, setClick] = useState(true);

  const checkClick = (): void => {
    if(click)
      setClick(false);
    else
      setClick(true);
  }

  return (
    <header className="flex items-center justify-between p-4 border_orange">
        <h1 className="font-bold text-[1.5rem]">Academia N<span className="text-[#f58634]">K</span></h1>
        
        <nav className="hidden sm:flex sm:items-center sm:justify-between">
          <ul className="flex items-center gap-5">
            {links.map(link => (
              <li key={link.id}>
                <a href={link.href} className='links linksHover'>{link.description}</a>
              </li>
             ))}
          </ul>
        </nav>

        <div className="flex gap-5">
          <a href='https://www.instagram.com/academia_nk/' className='socialLinks bg-pink-500 links hover:bg-white hover:text-pink-500' target='_blank'>
              <FaInstagram />
          </a>
          <a href='https://wa.me/5564996684840' className='socialLinks bg-[#075E54] links hover:bg-white hover:text-[#075E54]' target='_blank'>
              <FaWhatsapp />
          </a>
        </div>
        
        <button className="hidden text-3xl cursor-pointer border-none md:hidden" onClick={checkClick}>
          {click ? <IoIosMenu /> : <IoMdClose />}
        </button>
    </header>
  )
}

export default Header;