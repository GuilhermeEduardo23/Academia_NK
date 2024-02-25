const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around p-3 border-2 border-solid border-t-[#f58634] border-r-0 border-l-0 border-b-0 lg:flex-row">
        <p>
          {new Date().getFullYear()} &nbsp;
          Todos os direitos reservados.
        </p>
        <p><span className="font-bold">Desenvolvido por:</span> Guilherme Eduardo</p>
    </footer>
  )
}

export default Footer