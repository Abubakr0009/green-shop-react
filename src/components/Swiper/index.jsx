import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className="p-6 pt-[60px] max-w-full h-full mx-auto bg-[#F5F5F580]  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="custom-pagination"
      >
        <SwiperSlide>
          <div className="flex bg-[#F5F5F580]  ">
            <div className=" w-[700px]">
              <h3 className="font-medium text-base text-start max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO GREENSHOP
              </h3>
              <h1 className="font-black text-start text-[#3D3D3D] text-[100px] leading-[100px] max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S MAKE A <br />
                BETTER <span className="text-[#46A358]">PLANET</span>
              </h1>
              <p className="text-sm font-normal text-start text-[#727272] w-[600px] max-lg:text-xs mt-[10px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                SHOP NOW
              </button>
            </div>
            <div className="flex-[1] w-[518px]  relative flex justify-center items-center max-md:hidden">
              <img
                src="/icons/navgul2.svg"
                alt="Slide 1"
                className="w-[100px] h-[100px] relative top-[122px] left-[178px]"
              />
              <img
                src="/icons/navgul1.svg"
                alt="Slide 1"
                className="w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-[400px] ">
            <div className=" w-[800px]">
              <h3 className="font-medium text-start text-base  max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO GREENSHOP
              </h3>
              <h1 className="font-black text-start text-[#3D3D3D] text-[100px] leading-[100px] max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S OBSERVE <br /> A BETTER
                <span className="text-[#46A358]"> PLANET</span>
              </h1>
              <p className="text-sm font-normal text-start text-[#727272] w-[600px] max-lg:text-xs mt-[10px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                SHOP NOW
              </button>
            </div>
            <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
              <img
                src="/icons/navgul2.svg"
                alt="Slide 1"
                className="w-[100px] h-[100px] relative top-[140px] left-[170px]"
              />
              <img
                src="/images/image copy 3.png"
                alt="Slide 1"
                className="w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex  ">
            <div className=" w-[700px]">
              <h3 className="font-medium text-start text-base  max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO GREENSHOP
              </h3>
              <h1 className="font-black text-start text-[#3D3D3D] text-[100px] leading-[100px] max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S LIVE IN A BETTER
                <span className="text-[#46A358]"> PLANET</span>
              </h1>
              <p className="text-sm font-normal text-start text-[#727272] w-[600px] max-lg:text-xs mt-[10px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                SHOP NOW
              </button>
            </div>
            <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
              <img
                src="/icons/navgul2.svg"
                alt="Slide 1"
                className="w-[100px] h-[100px] relative top-[120px] left-[115px]"
              />
              <img
                src="/images/image copy 2.png"
                alt="Slide 1"
                className="w-full h-ful"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
