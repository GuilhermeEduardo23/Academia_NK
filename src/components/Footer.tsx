const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around p-3 border-2 border-solid border-t-[#f58634] border-r-0 border-l-0 border-b-0 lg:flex-row bg-[#051119]">
        <p>
          {new Date().getFullYear()} &nbsp;
          Todos os direitos reservados.
        </p>
        <p>
          <span className="font-bold">Desenvolvido por: </span> 
          <a href="https://link-tree-liart-gamma.vercel.app/" className="links linksHover" target="_blank">Guilherme Eduardo</a>
        </p>
    </footer>
  )
}

export default Footer