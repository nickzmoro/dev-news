import { TbCalendarTime } from "react-icons/tb";

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
              className={`relative overflow-hidden border border-[#242424] flex items-end col-span-1 row-span-2 h-[600px] rounded-[12px] p-8 bg-[url("${article[1].cover_image}")] bg-cover bg-center bg-no-repeat`}
            >
              <div className="absolute inset-0 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/50 rounded-[12px] pointer-events-none -z-0"></div>
              <div className="relative">
                <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem] mb-3">
                  <TbCalendarTime size={16} />{" "}
                  {article[1].readable_publish_date}
                </span>
                <h4 className="text-[1.1rem] font-[500] mb-1">
                  {article[1].title}
                </h4>
                <p className="text-[rgba(256,_256,_256,_0.75)]">
                  {article[1].description}
                </p>
              </div>
            </div>
            <div
              className={`relative overflow-hidden border border-[#242424] flex items-end h-[289px] rounded-[12px] p-8 bg-[url("${article[2].cover_image}")] bg-cover bg-center bg-no-repeat`}
            >
              <div className="absolute inset-0 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/50 rounded-[12px] pointer-events-none -z-0"></div>
              <div className="relative">
                <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem] mb-3">
                  <TbCalendarTime size={16} />{" "}
                  {article[2].readable_publish_date}
                </span>
                <h4 className="text-[1.1rem] font-[500] mb-1">
                  {article[2].title}
                </h4>
                <p className="text-[rgba(256,_256,_256,_0.75)]">
                  {article[2].description}
                </p>
              </div>
            </div>
            <div
              className={`relative overflow-hidden border border-[#242424] flex items-end h-[289px] rounded-[12px] p-8 bg-[url("${article[3].cover_image}")] bg-cover bg-center bg-no-repeat`}
            >
              <div className="absolute inset-0 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/50 rounded-[12px] pointer-events-none -z-0"></div>
              <div className="relative">
                <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem] mb-3">
                  <TbCalendarTime size={16} />{" "}
                  {article[3].readable_publish_date}
                </span>
                <h4 className="text-[1.1rem] font-[500] mb-1">
                  {article[3].title}
                </h4>
                <p className="text-[rgba(256,_256,_256,_0.75)]">
                  {article[3].description}
                </p>
              </div>
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
