import React from "react";

export default function Campaigns() {
  return (
    <div className="container mx-auto  items-center">
      <div className="flex flex-col relative">
        <h3 className="text-sm font-semibold my-8">Kampanyalar</h3>
        <img
          className="bg-primary rounded-lg w-full h-80"
          src="https://cdn.getir.com/getirweb-images/common/illustration/doodle.png"
          alt="banner"
        />
        <img
          className="absolute bottom-0 right-0"
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
        <h2 className="absolute top-44  text-white text-3xl font-semibold translate-x-12">
          Getir'i indirin!
        </h2>
        <div className="absolute top-52 mt-3 text-white text-lg font-semibold translate-x-12">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br />
          getirelim.
        </div>
        <div className="flex flex-row space-x-3">
          <a href="https://apps.apple.com/app/id995280265">
            <img
              className="absolute top-72 mt-5 text-white text-lg font-semibold translate-x-12"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.getir">
            <img
              className="absolute top-72 mt-5 text-white text-lg font-semibold translate-x-52"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a href="https://appgallery.huawei.com/#/app/C100954039">
            <img
              className="absolute top-72 mt-5 text-white text-lg font-semibold translate-x-[23rem]"
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
