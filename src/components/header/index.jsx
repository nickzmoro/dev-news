const Header = () => {
  return (
    <header className="fixed top-0 w-screen h-[7vh] flex justify-center items-center z-50 backdrop-blur-[15px] border-b border-b-[#ffffff1e]">
      <div>
        <a href="#" className="uppercase font-[600] text-[#fff] text-[1.5rem]">
          <span className="text-[#707070] font-[500]">&lt;</span> Dev News{" "}
          <span className="text-[#707070] font-[500]">/&gt;</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
