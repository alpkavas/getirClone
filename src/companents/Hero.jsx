import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";

function Hero() {
  const [selected, setSelected] = useState("TR");

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="relative before:bg-gradient-to-r before:from-secondary before:to-transparent before:absolute before:inset-0 before:h-full before:w-full z-20">
          <img
            className="w-full h-[500px] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt="getir"
          />
        </div>
        <div className="relative before:bg-gradient-to-r before:from-secondary before:to-transparent before:absolute before:inset-0 before:h-full before:w-full z-20">
          <img
            className="w-full h-[500px] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt="getir"
          />
        </div>
        <div className="relative before:bg-gradient-to-r before:from-secondary before:to-transparent before:absolute before:inset-0 before:h-full before:w-full z-20">
          <img
            className="w-full h-[500px] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt="getir"
          />
        </div>
        <div className="relative before:bg-gradient-to-r before:from-secondary before:to-transparent before:absolute before:inset-0 before:h-full before:w-full z-20">
          <img
            className="w-full h-[500px] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="getir"
          />
        </div>
      </Slider>
      <div className="container absolute z-10 top-20 mt-5 left-1/2 -translate-x-1/2 flex justify-between items-center ">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h2 className="text-white text-4xl mt-10 font-semibold">
            Dakikalar içinde <br />
            kapınızda
          </h2>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50">
          <h4 className="text-primary mb-3 pt-5 mx-auto flex text-center justify-center font-semibold text-lg">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex p-2 gap-2">
            <ReactFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT", "TR"]}
              customLabels={{
                US: "+1",
                GB: "+2",
                FR: "+6",
                DE: "+12",
                IT: "+15",
                TR: "+90",
              }}
              placeholder="Select Your Phone Number"
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flags-select"
            />
            <label className="flex-1 relative mb-3">
              <input
                required
                type="text"
                name="phone"
                className="h-14 px-4 border-2 border-gray-200 hover:border-secondary focus:border-secondary outline-none relative rounded w-full duration-200 peer"
              />
              <span
                className="absolute -top-1 inset-0 flex h-full px-4 items-center text-sm text-gray-400 peer-focus:h-7 peer-focus:text-xs transition-all peer-focus:text-secondary
                peer-valid:h-7 peer-valid:text-xs peer-valid:text-secondary">
                Telefon Numarısı
              </span>
            </label>
          </div>
          <div className="flex justify-center items-center ">
            <button className="h-12 w-96 mb-4 justify-center text-center  font-bold text-sm rounded-md bg-brand-yellow text-button-blue hover:bg-button-blue hover:text-opacity-90 hover:text-brand-yellow">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
