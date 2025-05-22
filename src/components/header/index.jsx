import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";

const Header = ({ article }) => {
  const [modalSearch, setModalSearch] = useState(false);
  const [captureInputValue, setCaptureInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchArticleByTag = () => {
    if (captureInputValue.trim().toLowerCase() === "") {
      setSearchResult([]);
    } else {
      setSearchResult(
        article.filter((item) => item.tags.includes(captureInputValue))
      );
    }
    console.log(searchResult);
  };

  return (
    <>
      {article && article.length > 0 && (
        <header className="fixed top-0 w-screen h-[7vh] flex justify-center items-center z-50 backdrop-blur-[15px] border-b border-b-[#ffffff1e]">
          <div className="relative">
            <button
              className="w-[500px] py-1 px-3 flex gap-2 items-center border border-[#ffffff3b] rounded-[12px] text-[#ffffff98] cursor-pointer hover:shadow-[0_0_10px_#ffffff1a] transition-all duration-300"
              onClick={() => setModalSearch(true)}
            >
              <ImSearch size={14} /> Procurar por artigos.. (react, javascript,
              etc)
            </button>
          </div>
        </header>
      )}

      {modalSearch && (
        <div
          onClick={() => setModalSearch(false)}
          className="fixed top-[0] left-0 w-screen h-screen bg-[#000000a9] flex items-center justify-center z-[100]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-4 px-6 bg-[#ffffff0a] backdrop-blur-[5px] rounded-[12px] border border-[#ffffff38]"
          >
            <div className="flex items-center gap-4">
              <ImSearch size={18} color="#aaaaaa" />
              <input
                type="text"
                placeholder="Procurar..."
                className="outline-none text-[1.1rem] text-[#fff] w-[500px]"
                name="search"
                value={captureInputValue}
                onChange={(e) => {
                  setCaptureInputValue(e.target.value);
                  searchArticleByTag();
                }}
              />
              <div
                className="bg-[#303030] rounded-[12px] p-[2px] cursor-pointer hover:bg-[#383838]"
                onClick={() => setCaptureInputValue("")}
              >
                <IoClose size={20} color="#aaaaaa" />
              </div>
            </div>
            {searchResult.length > 0
              ? searchResult.map((item) => (
                  <div
                    key={item.id}
                    className="mt-5 pt-3 border-t border-t-[#fff] text-[#fff]"
                  >
                    <p>{item.title}</p>
                  </div>
                ))
              : captureInputValue.trim() !== "" && (
                  <div className="mt-5 pt-3 border-t border-t-[#fff] text-[#fff]">
                    <p>Nenhum resultado encontrado..</p>
                  </div>
                )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
