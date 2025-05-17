import { TbCalendarTime } from "react-icons/tb";
import { TbBook } from "react-icons/tb";

const PosterContainer = ({
  articleImage,
  articleDate,
  articleTimeToRead,
  articleDescription,
  articleTitle,
}) => {
  return (
    <div>
      <img
        src={articleImage}
        alt=""
        className="absolute top-0 left-0 w-full h-full rounded-[12px] pointer-events-none -z-10 object-cover"
      ></img>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/50"></div>
      <div className="relative flex flex-col">
        <div className="flex gap-3">
          <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem] mb-3">
            <TbCalendarTime size={16} /> {articleDate}
          </span>
          <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem] mb-3">
            <TbBook size={17} /> {articleTimeToRead} min de leitura
          </span>
        </div>
        <h4 className="text-[1.1rem] font-[500] mb-1">{articleTitle}</h4>
        <p className="text-[rgba(256,_256,_256,_0.75)]">{articleDescription}</p>
      </div>
    </div>
  );
};

export default PosterContainer;
