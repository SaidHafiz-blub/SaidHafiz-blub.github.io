import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxCheck,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Development",
    description: "Membangun website responsif dan dinamis sesuai kebutuhan bisnis Anda, menggunakan teknologi modern dan clean code.",
  },
  {
    Icon: RxCrop,
    title: "UI/UX Design",
    description: "Mendesain antarmuka yang intuitif, estetik, dan mudah digunakan untuk meningkatkan pengalaman pengguna.",
  },
  {
    Icon: RxRocket,
    title: "SEO Optimization",
    description: "Mengoptimalkan performa dan visibilitas situs Anda di mesin pencari agar mudah ditemukan oleh audiens.",
  },
  {
    Icon: RxCheck,
    title: "Quality Assurance",
    description: "Melakukan pengujian menyeluruh untuk memastikan produk bebas dari bug dan siap digunakan dengan stabil.",
  },
  {
    Icon: RxReader,
    title: "Technical Documentation",
    description: "Menyusun dokumentasi teknis yang jelas dan lengkap untuk pengembangan berkelanjutan dan pemeliharaan sistem.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-sm text-slate-200">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
