import React from "react";
import Modal from "react-modal";
import { AiOutlineTwitter, AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Footer() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="bg-white mt-10  w-full ">
      <div className="flex flex-row container mx-auto space-x-20 mb-5 border-b-gray-50 ">
        <section>
          <nav className="flex flex-col space-y-4">
            <h6 className="text-lg text-primary mt-10">Getir'i indirin!</h6>
            <a href="https://apps.apple.com/app/id995280265">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.getir">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            </a>
            <a href="https://apps.apple.com/app/id995280265">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
            </a>
          </nav>
        </section>
        <div className="flex flex-col flex-1 ">
          <section className="text-sm">
            <nav className="flex flex-col space-y-4">
              <h6 className="text-lg text-primary mt-10">Getir'i keşfedin</h6>
              <a href="https://getir.com/hakkimizda/">Hakkımızda</a>
              <a href="https://career.getir.com/">Kariyer</a>
              <a href="https://career.getir.com/">Teknoloji Kariyerleri</a>
              <a href="https://getir.com/hakkimizda/iletisim/">İletişim</a>
              <a href="https://getir.com/sosyal-sorumluluk-projeleri/">
                Sosyal Sorumluluk Projeleri
              </a>
            </nav>
          </section>
        </div>
        <div className="flex flex-col flex-nowrap flex-1">
          <section className="text-sm">
            <nav className="flex flex-col space-y-4">
              <h6 className="text-lg text-primary mt-10">
                Yardıma mı ihtiyacınız var?
              </h6>
              <a href="https://getir.com/yardim/sss/">Sıkça Sorulan Sorular</a>
              <a href="https://getir.com/yardim/kvkk/">
                Kişisel Verilerin Korunması
              </a>
              <a href="https://career.getir.com/">Gizlilik Politikası</a>
              <a href="https://getir.com/yardim/kullanim-kosullari/">
                Kullanım Koşulları
              </a>
              <a href="https://getir.com/yardim/cerez-politikasi/">
                Çerez Politikası
              </a>
            </nav>
          </section>
        </div>
        <div className="flex flex-col ">
          <section className="text-sm">
            <nav className="flex flex-col space-y-4">
              <h6 className="text-lg text-primary mt-10">İş Ortağımız Olun</h6>
              <a href="https://bayi-basvuru.getir.com/">Bayimiz Olun</a>
              <a href="https://depodukkan.getir.com/">Deponuzu Kiralayın</a>
              <a href="https://restoran.getiryemek.com/form/on-basvuru/">
                GetirYemek Restoranı Olun
              </a>
              <a href="https://panel.getircarsi.com/form/pre-application">
                GetirÇarşı İşletmesi Olun
              </a>
              <a href="https://getir.com/yemek/markalar/">Zincir Restoranlar</a>
            </nav>
          </section>
        </div>
        <div className="block p-4 bg-slate-50 shadow-md w-28 h-28 mt-10">
          <a href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1">
            <img
              data-testid="main-image"
              src="https://cdn.getir.com/getirweb-images/common/etbis.png"
              alt="ETBIS"
              shape="NORMAL"></img>
          </a>
        </div>
      </div>
      <hr />
      <div className="container mx-auto mt-5 flex justify-between mb-5 ">
        <div className="flex flex-row justify-center text-xs items-center ">
          <p>© 2023 Getir</p>
          <li className="  ml-4 text-primary "></li>
          <ul>
            <li>
              <a
                className="text-primary"
                href="https://e-sirket.mkk.com.tr/?page=company&company=18806">
                Bilgi Toplumu Hizmetleri
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center w-18 items-center ">
          <a href="">
            <BiLogoFacebookCircle
              size={27}
              className="hover:text-primary ml-3 text-icon-gray transition"
            />
          </a>
          <a href="">
            <AiOutlineTwitter
              size={27}
              className="hover:text-primary ml-3 text-icon-gray transition "
            />
          </a>
          <a href="">
            <FaInstagram
              size={27}
              className="hover:text-primary ml-3 text-icon-gray  transition "
            />
          </a>
          <button
            onClick={openModal}
            className="w-full flex text-sm justify-center items-center ml-3 border px-2 py-1.5 transition border-gray-200 rounded group hover:text-primary hover:bg-purple-50">
            <RiGlobalLine
              size={20}
              className="group-hover:text-primary group-hover:bg-purple-100 transition  text-icon-gray"
            />
            Türkçe(TR)
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Select Language">
            <div className="flex flex-col justify-center w-96 h-64 rounded-md relative">
              <AiOutlineClose
                className="cursor-pointer justify-end absolute top-0 right-0 "
                onClick={closeModal}></AiOutlineClose>
              <h2
                className="text-primary flex w-full absolute top-10 text-center justify-center"
                ref={(_subtitle) => (subtitle = _subtitle)}>
                Dil Değiştir
              </h2>
              <div>
                <div
                  id="turkishLang"
                  className="border border-gray-100 flex justify-between p-2 rounded-md text-center items-center">
                  <div>
                    <input type="radio" name="lang" id="turkLang" />
                    <label>Türkçe</label>
                  </div>
                  <img
                    className="w-5 h-3"
                    src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tr.svg"
                    alt=""
                  />
                </div>
                <div
                  id="englishLang"
                  className="border border-gray-100 flex justify-between p-2 rounded-md text-center items-center">
                  <div>
                    <input type="radio" name="lang" id="engLang" />
                    <label>English</label>
                  </div>
                  <img
                    className="w-5 h-3"
                    src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
                    alt=""
                  />
                </div>
              </div>
              <button className="h-12 w-96  absolute bottom-0 mb-3  justify-center text-center  font-bold text-sm rounded-md bg-primary  text-white hover:bg-secondary ">
                Güncelle
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Footer;
