import { FaRegClock } from "react-icons/fa";

import location from "/public/icons/location.png";

const Location = () => {
  return (
    <div id="location" className="flex flex-col items-center p-4 mb-4">
      <h1 className="text-4xl text-center font-bold mb-4">Onde Estamos</h1>

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.52861599144987!2d-49.25108229226144!3d-18.42373381501154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a10de0ae80079b%3A0xa53bba6359e1d898!2sNK%20Academia!5e0!3m2!1spt-BR!2spt!4v1707055681896!5m2!1spt-BR!2spt" height="400" className="rounded-2xl shadow-2xl sm:w-[500px]"></iframe>

        <div className="flex flex-col items-center md:items-start">
          <p className="flex items-center gap-2">
            <img src={location} />
            Av. Marilaine Borges Oliveira Faria
          </p>
          <p>Nº 732</p>
          <p>Residencial Sonho Verde</p>
          <p>CEP: 75534-414</p> <p className="mb-4">Itumbiara-GO, Brasil</p>

          <h2 className="flex items-center gap-1 font-bold">
            <FaRegClock />
            Horário de Funcionamento:
          </h2>

          <p>Segunda à Sexta</p>
          <p>06:00 - 11:00</p>
          <p>15:00 - 21:00</p>
        </div>
      </div>
    </div>
  )
}

export default Location