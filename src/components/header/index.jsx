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
        article.filter((item) =>
          item.tags.includes(captureInputValue.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      {article && article.length > 0 && (
        <header className="fixed top-0 w-screen h-[7vh] flex justify-center items-center z-50 backdrop-blur-[15px] border-b border-b-[#ffffff1e]">
          <div className="relative">
            <button
              className="w-[500px] max-md:w-full py-1 px-3 flex gap-2 items-center border border-[#ffffff3b] rounded-[12px] text-[#ffffff98] cursor-pointer hover:shadow-[0_0_10px_#ffffff1a] transition-all duration-300"
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
          className="fixed top-[0] left-0 w-screen h-screen bg-[#000000a9] flex items-center justify-center z-[100] max-md:px-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-4 px-6 bg-[#ffffff0a] backdrop-blur-[15px] rounded-[12px] border border-[#ffffff38] w-[600px] max-md:w-full"
          >
            <div className="flex items-center gap-4">
              <ImSearch size={18} color="#aaaaaa" />
              <input
                type="text"
                placeholder="Procurar..."
                className="outline-none text-[1.1rem] text-[#fff] w-[500px] max-md:w-full"
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
            <div className="max-h-[400px] overflow-y-auto mt-3">
              <div className="w-full h-[1px] bg-[#ffffff42]"></div>
              {searchResult.length > 0
                ? searchResult.map((item) => (
                    <div key={item.id} className="mt-5 text-[#fff] flex gap-3">
                      <div>
                        <img
                          src={item.user.profile_image_90}
                          alt=""
                          className="w-[70px] rounded-full border-2 border-[#adadad]"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                          <a
                            href={item.url}
                            className="font-[600] hover:underline hover:text-[#ffffffea]"
                            target="_blank"
                            rel="noopener noreferer"
                          >
                            {item.user.name}
                          </a>
                          <span className="text-[#ffffff98]">
                            - {item.readable_publish_date}
                          </span>
                        </div>
                        <div>
                          <p className="text-[#ffffffe5]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : captureInputValue.trim() !== "" && (
                    <div className="pt-3 text-[#ffffffb2]">
                      <p>Nenhum resultado encontrado...</p>
                    </div>
                  )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
