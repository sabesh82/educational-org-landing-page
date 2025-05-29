import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur odio eveniet blanditiis porro eaque tempora distinctio consequuntur delectus! Asperiores!",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur odio eveniet blanditiis porro eaque tempora distinctio consequuntur delectus! Asperiores!",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur odio eveniet blanditiis porro eaque tempora distinctio consequuntur delectus! Asperiores!",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur odio eveniet blanditiis porro eaque tempora distinctio consequuntur delectus! Asperiores!",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur odio eveniet blanditiis porro eaque tempora distinctio consequuntur delectus! Asperiores!",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur odio eveniet blanditiis porro eaque tempora distinctio consequuntur delectus! Asperiores!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-5 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Shared Experiences
        </h1>
        <p>Voices that reflect our mission and impact.</p>
      </div>

      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-buttom-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="swiper mb-12"
        >
          {testimonials.map((testimonials, key) => (
            <SwiperSlide key={key}>
              <div className="text-center bg-gray-500/50 p-4 rounded-lg flex flex-col">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonials.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {testimonials.name}
                </h3>
                <p>{testimonials.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*nav button*/}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-buttom-prev-custom w-12 h-12 rounded-full flex items-center justify-center border border-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronLeft className="size-6" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full flex items-center justify-center border border-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
