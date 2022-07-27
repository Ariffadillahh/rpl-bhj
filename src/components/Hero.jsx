import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TypeWriterEffect from "react-typewriter-effect";
import gbk from "../source/gbk.png";
import gbk2 from "../source/gbkk2.svg";
import gbk3 from "../source/gbkk3.svg";
import bljr from "../source/foto.png";
import LKS from "../source/LKS.webp";
import wisuda from "../source/wisuda.webp";
import gudep from "../source/gudep.webp";
import LSP from "../source/LSP.webp";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const Hero = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide(['<div class="swiper-slide">Slide ' + --prependNumber + "</div>", '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"]);
  };

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + --prependNumber + "</div>");
  };

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + ++appendNumber + "</div>");
  };

  const append2 = () => {
    swiperRef.appendSlide(['<div class="swiper-slide">Slide ' + ++appendNumber + "</div>", '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"]);
  };

  return (
    <div id="home" className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[220px] md:h-[330px] lg:h-[500px] bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${gbk})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="content-center pt-[13%] text-white">
              <h2 className="text-xl font-bold font-sans text-[#bbe5f8] lg:text-3xl">SMK BHUMI HUSADA</h2>
              <h1 className="text-3xl uppercase font-bold tracking-widest font-sans lg:text-5xl">software engineer</h1>
              <h5 className="text-base lg:text-xl lg:pt-1">"Little Things Means A Lot"</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${gbk2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="w-full h-[220px] md:h-[330px] lg:h-[500px] bg-[#DFF5FF] justify-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[220px] md:h-[330px] lg:h-[500px] bg-[#EDFFD8] bg-cover bg-no-repeat content-center pt-[13%] text-white"
            style={{ backgroundImage: `url(${gbk3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <div>
        <h1 className="text-center font-bold text-2xl uppercase mt-10 md:text-3xl bg-clip-text bg-gradient-to-r from-[#034867] to-[#bbe5f8] text-transparent ">
          We are software engineer<span className="block">Smk Bhumi husada</span>
          <span className="block w-[100px] h-1 my-4 rounded-lg bg-[#034867] text-center mx-auto"></span>
        </h1>
        <div className="text-center">
          <h1 className="mx-3 mt-11 md:text-lg lg:text-xl text-white">
            Software Engineering (RPL) adalah salah satu program keahlian yang ada di SMK Bhumi Husada yang dibuka pada tahun 2017.
            <span className="text-white pl-1 pb-3 text-center flex  place-content-center">
              Di SMK BHJ Belajar <span className="mx-1">Tentang</span>
              <TypeWriterEffect
                startDelay={1500}
                cursorColor="#3F3D56"
                multiText={["Coding..", "Merakit pc...", "Editing Video...", "Podcast..", "dan Jaringan."]}
                multiTextDelay={1000}
                typeSpeed={30}
                multiTextLoop
                className="pl-1 text-white"
              />
            </span>
          </h1>
        </div>
        <div className="m-3 ">
          <div className="lg:flex ">
            <img src={bljr} className="w-full h-full lg:w-1/2 lg:mt-[80px]" />
            <div className="lg:mt-[300px] ">
              <h1 className="font-bold text-xl uppercase -mt-5 mdtext-base lg:w-full md:text-center bg-clip-text bg-gradient-to-r from-[#034867] to-[#bbe5f8] text-transparent">
                our vision & mission <span className="block w-[230px] md:w-[100px] h-1 my-4 rounded-lg bg-[#55b1db] text-center md:mx-auto"></span>
              </h1>
              <h1 className="  lg:text-lg md:mx-10 text-white ">
                Menjadi SMK yang memiliki keunggulan lokal dan global serta berakhlak mulia Mengutamakan kesiapan siswa untuk memasuki dunia kerja sertamengembangkankeprofesionalan Menyiapkan tenaga menengah kejuruan yang terampil berakhlak
                mulia untuk mengisi kebutuhan dunia usaha dan industri Menyiapkan siswa agar menjadi warga negara yang produktif Menyiapkan siswa agar dapat berwirausaha secara mandiri Menyiapkan siswa agar dapat melanjutkan pedidikan ke
                jenjang yang lebih tinggi
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-[50px] m-5">
          <div>
            <h1 className="text-white font-semibold m-5 text-lg">Latest news</h1>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}

            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              488: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            modules={[ Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="section">
              <SwiperSlide className="rounded-lg bg-slate-900">
                <div className="h-[400px] w-full relative rounded-lg" style={{ backgroundImage: `url(${LKS})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="">
                    <h1 className="text-white p-5 pb-[75px] absolute bg-slate-600/80 bottom-0 rounded-lg">Lomba Kompetensi Siswa Farmasi Tingkat Provinsi DKI Jakarta, SMK Farmasi Bhumi Husada memperoleh Juara ke-2 </h1>
                    <a href="https://www.instagram.com/p/CgDteqSruIt/?utm_source=ig_web_copy_link" target="_blank"><button className="bg-white p-3 px-5 absolute bottom-4 left-3">Lihat</button></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-lg bg-slate-900">
                <div className="h-[400px] w-full relative rounded-lg" style={{ backgroundImage: `url(${wisuda})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="">
                    <h1 className="text-white p-5 pb-[75px] absolute bg-slate-600/80 bottom-0 rounded-lg">Wisuda dan Angkat Sumpah Lulusan XIII Tahun 2022</h1>
                    <a href="https://www.instagram.com/p/CftvBUQPccH/?utm_source=ig_web_copy_link" target="_blank"><button className="bg-white p-3 px-5 absolute bottom-4 left-3">Lihat</button></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-lg bg-slate-900">
                <div className="h-[400px] w-full relative rounded-lg" style={{ backgroundImage: `url(${gudep})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="">
                    <h1 className="text-white p-5 pb-[75px] absolute bg-slate-600/80 bottom-0 rounded-lg">Pengukuhan dan Pelantikan Majelis Pembimbing dan Pembina Gugus Depan 09.217 dan 09.218 Pangkalan SMK Bhumi Husada</h1>
                    <a href="https://www.instagram.com/p/Cdx9bVRP4ty/?utm_source=ig_web_copy_link" target="_blank"><button className="bg-white p-3 px-5 absolute bottom-4 left-3">Lihat</button></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-lg bg-slate-900">
                <div className="h-[400px] w-full relative rounded-lg" style={{ backgroundImage: `url(${LSP})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="">
                    <h1 className="text-white p-5 pb-[75px] absolute bg-slate-600/80 bottom-0 rounded-lg">Pelaksanaan USK LSP P3 KFI SMK Bhumi Husada Jakarta</h1>
                    <a href="https://www.instagram.com/p/Cb2CvpYLU3M/?utm_source=ig_web_copy_link" target="_blank"><button className="bg-white p-3 px-5 absolute bottom-4 left-3">Lihat</button></a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
