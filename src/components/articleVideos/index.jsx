import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoMdAlarm } from "react-icons/io";
import { TbDownload } from "react-icons/tb";

const ArticleVideos = ({ video }) => {
  console.log(video);

  return (
    <section className="w-screen min-h-screen flex items-center justify-center text-[#fff]">
      {video && video.length > 0 ? (
        <div className="w-[80%] h-auto max-sm:w-[90%]">
          <div className="flex items-center gap-5">
            <h3 className="text-[1.3rem] font-[500]">Videos</h3>
            <div className="w-full h-[1px] bg-[#ffffff75]"></div>
            <img src="./cam.png" alt="Câmera" />
          </div>
          <div className="mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              className="mySwiper rounded-[12px]"
            >
              {video.map((item) => (
                <SwiperSlide
                  className="bg-[#1a1a1a27] border border-[rgba(256,_256,_256,_0.1)] rounded-[12px]"
                  key={item.id}
                >
                  <div className="w-full h-[400px] overflow-hidden p-3 flex flex-col">
                    <div>
                      <img
                        src={item.cloudinary_video_url}
                        alt={item.title}
                        className="w-[360px] h-[180px] rounded-t-[12px] border border-[rgba(256,_256,_256,_0.1)]"
                      />
                    </div>
                    <div className="mt-3 w-full h-full flex flex-col justify-between">
                      <div>
                        <p className="text-[#ffffffef] font-[500]">
                          <span className="text-[#B7B7B7]">por</span>{" "}
                          {item.user.name} 📽️
                        </p>
                        <h4 className="mt-2 text-[1.05rem] font-[500]">
                          {item.title}
                        </h4>
                      </div>
                      <div className="flex flex-col">
                        <div className="w-full h-[1px] bg-[#ffffff23]"></div>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <p className="flex gap-1 items-center text-[rgba(256,_256,_256,_0.75)]">
                              <IoMdAlarm />
                              {item.video_duration_in_minutes}
                            </p>
                          </div>
                          <a
                            href={item.video_source_url}
                            className="group p-1 rounded-[5px] border border-[rgba(256,_256,_256,_0.1)] flex items-center justify-center bg-[#222222] cursor-pointer hover:bg-[#333333] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Download vídeo"
                          >
                            <TbDownload
                              className="group-hover:text-[#ffffffb9] text-[#7e7e7e] transition-all duration-300"
                              size={18}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div>
          <p>Carregando...</p>
        </div>
      )}
    </section>
  );
};

export default ArticleVideos;
