import React from "react";
import bunga from "../source/bunga.png";

const Galery = () => {
  return <div>
    <div>
      <div ><img src={bunga} className="mx-auto mt-10" /></div>
      <h1 className="text-center uppercase mt-7 text-lg font-bold ">Gallery rpl smk bhumi husada <span className="block w-[100px] h-1 my-7 rounded-lg bg-[#034867] text-center mx-auto" ></span></h1>
      <div className="md:flex mx-5 pt-5">
        <div className="w-full h-[1031px] bg-[#E9E9E9] mx-10 rounded-lg mb-10"></div>
      </div>
    </div>
  </div>;
};

export default Galery;
