import { FiPaperclip } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";

const Home = ({ authors, title, article }) => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gray-950">
      {article && article.length > 0 ? (
        <>
          <div className="absolute top-0 left-0 w-screen h-screen">
            <img
              src={article[0].social_image}
              alt=""
              className="w-full h-full opacity-5"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-gray-950 to-gray-950/0"></div>
          </div>
          <div className="w-[80%] max-sm:w-[90%] h-[100%] flex flex-col items-center justify-center mb-10 z-10">
            <div className="flex items-center gap-2">
              <div className="flex">
                <div className="w-[35px] h-[35px] bg-black rounded-full">
                  <img
                    src={article[0].user.profile_image_90}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="w-[35px] h-[35px] bg-black rounded-full">
                  <img
                    src={article[1].user.profile_image_90}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="w-[35px] h-[35px] bg-black rounded-full">
                  <img
                    src={article[2].user.profile_image_90}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="w-[35px] h-[35px] bg-black rounded-full">
                  <img
                    src={article[3].user.profile_image_90}
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="text-[#DADADA] font-[500]">{authors}</p>
            </div>
            <div className="mt-5 mb-[50px] max-sm:mb-[25px]">
              <h2 className="text-[#fff] text-[3rem] font-[700] max-w-[850px] text-center leading-[60px] max-sm:text-[2.5rem] max-sm:leading-[50px]">
                {title}
              </h2>
            </div>
            <div className="flex flex-col gap-5 relative border border-[#ffffff33] rounded-[12px] p-5 shadow-[0px_0px_50px_rgba(256,256,256,0.25)]">
              <div className="absolute top-[-2px] right-0">
                <img src="./medal.png" alt="" className="w-[50px]" />
              </div>
              <div className="flex gap-2.5">
                <div className="w-[35px] h-[35px] bg-black rounded-full">
                  <img
                    src={article[0].user.profile_image_90}
                    alt={article[0].user.name}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[#fff]">{article[0].user.name}</p>
                  <span className="text-[#ffffff73]">
                    {article[0].readable_publish_date}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-[#ffffffc0] mb-1 text-[1.1rem] font-[500]">
                  {article[0].title}
                </h3>
                <p className="text-[#ffffff94]">{article[0].description}</p>
              </div>
              <div className="flex justify-between items-center pt-2.5 border-t border-t-[#ffffff17]">
                <div>
                  <a
                    href={`${article[0].url}`}
                    className="text-[#ffffffc0] font-[500] flex items-center gap-1.5 hover:text-[#ffffffe8] transition-colors duration-300"
                    target="_blank"
                  >
                    <FiPaperclip /> Ver completo
                  </a>
                </div>
                <div className="flex gap-4">
                  <div>
                    <span className="flex items-center gap-1.5 text-[#D7FFCA]">
                      <SlLike /> {article[0].positive_reactions_count}
                    </span>
                  </div>
                  <div>
                    <span className="flex items-center gap-1.5 text-[#ffffffc0]">
                      <FaRegComment size={18} />{" "}
                      {article[0].public_reactions_count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Carregando artigos...</p>
      )}
    </section>
  );
};

export default Home;
