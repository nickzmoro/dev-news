import { MdOutlineOpenInNew } from "react-icons/md";
import Poster from "../posterContainer";

const LatestNews = ({ article }) => {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center">
      {article && article.length > 0 ? (
        <div className="w-[80%] h-[auto]">
          <div className="flex items-center w-full justify-between">
            <h3 className="text-[#fff] w-[200px] text-[1.3rem] font-[500]">
              Últimas notícias
            </h3>
            <div className="h-[1px] w-full bg-[#ffffff75]"></div>
          </div>
          <div className="text-[#fff] grid grid-cols-2 gap-4 mt-5">
            <div
              className={`relative overflow-hidden border border-[#242424] flex flex-col justify-between col-span-1 row-span-2 h-[600px] rounded-[12px] p-8 hover:shadow-[0_0_20px_rgba(255,_255,_255,_0.05)] hover:scale-[100.5%] transition-all duration-300 ease-in-out`}
            >
              <div className="flex justify-end">
                <a
                  href={article[1].url}
                  className="group cursor-pointer z-10"
                  target="_blank"
                >
                  <MdOutlineOpenInNew
                    size={25}
                    className="group-hover:text-gray-500 transition-all duration-300 ease-in-out"
                  />
                </a>
              </div>
              <Poster
                articleImage={article[1].social_image}
                articleDate={article[1].readable_publish_date}
                articleTimeToRead={article[1].reading_time_minutes}
                articleDescription={article[1].description}
                articleTitle={article[1].title}
              />
            </div>
            <div
              className={`relative overflow-hidden border border-[#242424] flex flex-col justify-between h-[289px] rounded-[12px] p-8 hover:shadow-[0_0_20px_rgba(255,_255,_255,_0.05)] hover:scale-[100.5%] transition-all duration-300 ease-in-out`}
            >
              <div className="flex justify-end">
                <a
                  href={article[2].url}
                  className="group cursor-pointer z-10"
                  target="_blank"
                >
                  <MdOutlineOpenInNew
                    size={25}
                    className="group-hover:text-gray-300 transition-all duration-300 ease-in-out"
                  />
                </a>
              </div>
              <Poster
                articleImage={article[2].social_image}
                articleDate={article[2].readable_publish_date}
                articleTimeToRead={article[2].reading_time_minutes}
                articleDescription={article[2].description}
                articleTitle={article[2].title}
              />
            </div>
            <div
              className={`relative overflow-hidden border border-[#242424] flex flex-col justify-between h-[289px] rounded-[12px] p-8 hover:shadow-[0_0_20px_rgba(255,_255,_255,_0.05)] hover:scale-[100.5%] transition-all duration-300 ease-in-out`}
            >
              <div className="flex justify-end">
                <a
                  href={article[3].url}
                  className="group cursor-pointer z-10"
                  target="_blank"
                >
                  <MdOutlineOpenInNew
                    size={25}
                    className="group-hover:text-gray-500 transition-all duration-300 ease-in-out"
                  />
                </a>
              </div>
              <Poster
                articleImage={article[3].social_image}
                articleDate={article[3].readable_publish_date}
                articleTimeToRead={article[3].reading_time_minutes}
                articleDescription={article[3].description}
                articleTitle={article[3].title}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </section>
  );
};

export default LatestNews;
