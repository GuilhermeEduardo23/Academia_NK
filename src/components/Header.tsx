import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";

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

  const [click, setClick] = useState(false);

  const checkClick = (): void => {
    setClick(true);

    if(click)
      setClick(false);
  }

  return (
    <header className="flex items-center justify-between p-4 mb-20 border_orange">
        <h1 className="font-bold text-[1.5rem]">Academia N<span className="text-[#f58634]">K</span></h1>
        <nav className={click ? 'flex flex-col items-center justify-center bg-red-500 md:flex' : 'hidden md:flex'}>
          <ul className="flex gap-[2rem]">
            {links.map(link => (
              <li key={link.id}>
                <a href={link.href} className='links linksHover'>{link.description}</a>
              </li>
             ))}
          </ul>
          
          <a href='https://www.instagram.com/academia_nk/' className='socialLinks bg-pink-500 links hover:bg-white hover:text-pink-500' target='_blank'>
              <FaInstagram /> Instagram
          </a>
          <a href='https://wa.me/5564996684840' className='socialLinks bg-[#075E54] links hover:bg-white hover:text-[#075E54]' target='_blank'>
              <FaWhatsapp /> WhatsApp
          </a>
        </nav>
        
        <IoIosMenu className='text-3xl cursor-pointer md:hidden' onClick={checkClick}/>

    </header>
  )
}

export default Header;