import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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

  return (
    <header className="text-white flex items-center justify-between p-4">
        <h1 className="font-bold text-[1.8rem]">Academia N<span className="text-[#f58634]">K</span></h1>

        <nav className='flex'>
            <ul className="flex gap-[2rem]">
             {links.map(link => (
              <li key={link.id}>
                <a href={link.href} className='links linksHover'>{link.description}</a>
              </li>
             ))}
            </ul>
        </nav>

        <div className='flex gap-2'>
          <a href='https://www.instagram.com/academia_nk/' className='socialLinks bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 links hover:bg-white' target='_blank' >
            <FaInstagram /> Instagram
          </a>
          <a href='https://wa.me/5564996684840' className='socialLinks bg-[#075E54] links hover:bg-white hover:text-[#075E54]' target='_blank'>
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
    </header>
  )
}

export default Header;