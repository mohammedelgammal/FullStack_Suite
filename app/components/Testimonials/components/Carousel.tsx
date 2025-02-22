"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import range from "@/utils/range";

import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet !bg-disabled",
        bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
      }}
      className="relative container-center cursor-grab"
    >
      {testimonials.map((testimonial, key) => (
        <SwiperSlide key={key}>
          <Slide src={`/testimonials/${key + 1}.webp`} {...testimonial} />
        </SwiperSlide>
      ))}
      <SwiperNavigation />
    </Swiper>
  );
};

const Slide = ({ src, testimonial, reviewer, jobTitle }: SlidePropsType) => {
  return (
    <div className="container-center min-w-full">
      <div className="container-center-v w-3/4 py-12 gap-5">
        <Image
          src={src}
          alt={`${reviewer} testimonial`}
          width={100}
          height={100}
          className="rounded-full border-2 border-secondary"
        />
        <p className="text-white text-lg text-center">"{testimonial}"</p>
        <div className="container-center-v">
          <div className="container-center gap-1 mb-2">
            {range(5).map((_, key) => (
              <Image
                key={key}
                src="/star.svg"
                alt="star icon"
                width={17}
                height={17}
              />
            ))}
          </div>
          <span className="text-2xl text-secondary">{reviewer}</span>
          <span className="text-sm text-white">{jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

const SwiperNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="container-center gap-32 absolute inset-x-0 top-chevron">
      <Image
        src="/chevron-left.svg"
        alt="left control"
        width={30}
        height={30}
        className="cursor-pointer z-10 active:scale-75 ease-linear duration-100"
        onClick={() => swiper.slidePrev()}
      />
      <Image
        src="/chevron-right.svg"
        alt="right control"
        width={30}
        height={30}
        className="cursor-pointer z-10 active:scale-75 ease-linear duration-100"
        onClick={() => {
          console.log("clicked");
          swiper.slideNext();
        }}
      />
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    testimonial:
      "Working with Elsakka has been a game-changer for me. I’ve lost 15 pounds and gained so much energy. The personalized workouts and nutrition advice are top-notch. I couldn’t have done it without their support!",
    reviewer: "Kevin Johnson",
    jobTitle: "Marketing Manager",
  },
  {
    testimonial:
      "I’ve tried gyms and trainers before, but Elsakka is on another level. They pushed me to my limits while keeping the sessions fun and engaging. I’ve never felt stronger or more confident in my life!",
    reviewer: "Michael Carter",
    jobTitle: "Software Engineer",
  },
  {
    testimonial:
      "As a busy entrepreneur, I didn’t think I had time for fitness. Elsakka created a flexible plan that fits my schedule, and the results have been incredible. I’ve gained muscle, improved my posture, and feel more productive than ever!",
    reviewer: "David Martinez",
    jobTitle: "Entrepreneur",
  },
];

// type definitions starts here
type SlidePropsType = {
  src: string;
  testimonial: string;
  reviewer: string;
  jobTitle: string;
};

type Testimonial = Pick<
  SlidePropsType,
  "testimonial" | "reviewer" | "jobTitle"
>;

export default Carousel;
