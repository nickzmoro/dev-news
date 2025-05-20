import { TbBook, TbCalendarTime } from "react-icons/tb";
import { MdOutlineOpenInNew } from "react-icons/md";

const FilterPosterContainer = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex gap-7 mb-5 max-sm:border max-sm:border-[#ffffff2a] max-sm:p-3 max-sm:rounded-[12px] max-sm:hover:shadow-[0_0_10px_#ffffff2a] max-sm:hover:transition-all max-sm:hover:duration-300"
    >
      <div className="w-[200px] h-[200px] max-sm:hidden">
        <img
          src={item.social_image}
          alt={item.title}
          className="w-full h-full object-cover object-center rounded-[12px]"
        />
      </div>
      <div className="flex gap-4 flex-col justify-between">
        <div>
          <div className="flex gap-3 items-center">
            <img
              src={item.user.profile_image_90}
              alt={item.user.name}
              className="w-[45px] rounded-full"
            ></img>
            <div>
              <p>{item.user.name}</p>
              <div className="flex gap-3 items-center">
                <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem]">
                  <TbCalendarTime size={16} /> {item.readable_publish_date}
                </span>
                <span className="text-[rgba(256,_256,_256,_0.75)] flex gap-1.5 items-center text-[0.9rem]">
                  <TbBook size={17} /> {item.reading_time_minutes} min de
                  leitura
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-[500] text-[1.1rem]">{item.title}</h3>
            <p className="mt-1.5 text-[rgba(256,_256,_256,_0.75)]">
              {item.description}
            </p>
          </div>
        </div>
        <div>
          <div>
            <a
              href={item.url}
              className="flex gap-1 items-center text-[rgba(256,_256,_256,_0.85)] font-[500] group hover:text-[#fff] transition-all duration-300"
              target="_blank"
            >
              Veja o artigo completo <MdOutlineOpenInNew />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPosterContainer;
