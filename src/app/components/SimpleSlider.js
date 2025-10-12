"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="h-[230px]">
      <Slider {...settings}>
        <div>
          <Image
            src={"/assets/OffBanner.png"}
            height={400}
            width={800}
            alt="Off"
            className="w-full object-cover"
          />
        </div>
        <div>
          <Image
            src={"/assets/IbBanner.png"}
            height={400}
            width={800}
            alt="Ib"
            className="w-full object-cover"
          />
        </div>
        <div>
          <Image
            src={"/assets/OmoriBanner.png"}
            height={400}
            width={800}
            alt="Omori"
            className="w-full object-cover"
          />
        </div>
        <div>
          <Image
            src={"/assets/DeltaBanner.png"}
            height={400}
            width={800}
            alt="Deltarune"
            className="w-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
