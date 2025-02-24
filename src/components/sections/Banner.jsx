"use client";
import Slider from "react-slick";
import Image from "../ui/Image"; // Assuming you're using your custom Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Ensure the slick carousel styles are imported

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"absolute text-white z-50 top-[50%] right-5 cursor-pointer"}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"absolute text-white z-50 top-[50%] left-5 cursor-pointer"}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

const Banner = () => {
  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="absolute z-10 bottom-[46px] left-[50%] translate-x-[-50%]">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <section>
      <Slider {...settings}>
        <div>
          <a href="#">
          <Image src="/Banner2.png" alt="Banner" width={1728} height={720} /> {/* Image path from the public folder */}
          </a>
        </div>
        <div>
          <a href="#">
          <Image src="/Banner2.png" alt="Banner" width={1728} height={720} />
          </a>
        </div>
        <div>
          <a href="#">
          <Image src="/Banner2.png" alt="Banner" width={1728} height={720} />
          </a>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
