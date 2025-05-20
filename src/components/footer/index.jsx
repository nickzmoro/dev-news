const Footer = () => {
  return (
    <footer className="w-screen h-auto py-5 bg-[#33333327] border-t border-t-[#ffffff2a] flex items-center justify-center">
      <div className="w-[90%] h-auto flex items-center justify-between max-md:justify-center">
        <div className="relative flex gap-2 text-[#fff]">
          <img
            src="./vetor.png"
            alt="Logo"
            className="absolute bottom-[5px] left-0 opacity-75 w-[50px]"
          />
          <p className="text-[#ffffff9f]">Desenvolvido por</p>
          <a
            href="https://devnicolasm.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar o site do desenvolvedor"
            className="text-[1.5rem] font-[800]"
          >
            NICOLAS<span className="text-[#404CD1]">M.</span>
          </a>
        </div>
        <div className="max-md:hidden">
          <p className="text-[#ffffffc5]">
            &copy; Copyright 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
