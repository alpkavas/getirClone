import React from "react";

function Cards() {
  return (
    <div className="container mx-auto space-x-4 grid grid-cols-3 items-center my-14">
      <div className="max-w-md bg-white border border-gray-200 rounded-lg w-auto flex flex-col text-center ">
        <img
          className="rounded-t-lg flex mx-auto items-center w-40 h-40 justify-center mt-20  "
          src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
          alt=""
        />
        <div className="p-2">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-primary">
              Her siparişinize bir kampanya
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
      </div>
      <div className="max-w-md bg-white border border-gray-200 rounded-lg w-auto flex flex-col  text-center ">
        <img
          className="rounded-t-lg flex mx-auto items-center w-40 h-40 justify-center mt-20 "
          src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
          alt=""
        />
        <div className="p-2">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-primary">
              Dakikalar içinde kapınızda
            </h5>
          </a>
          <p className="mb-9 font-normal text-gray-700 dark:text-gray-400">
            Getir’le siparişiniz dakikalar içinde kapınıza gelir.
          </p>
        </div>
      </div>
      <div className="max-w-md bg-white border border-gray-200 rounded-lg w-auto flex flex-col  text-center ">
        <img
          className="rounded-t-lg flex mx-auto items-center w-40 h-40 justify-center mt-20 "
          src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
          alt=""
        />
        <div className="p-2">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-primary">
              Binlerce çeşit mutluluk
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
