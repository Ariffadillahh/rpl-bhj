import React from "react";
import org from "../source/org.svg";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center uppercase mt-[60px] text-lg font-bold lg:text-3xl text-white ">
        Contact Us <span className="block w-[100px] h-1 my-7 rounded-lg bg-[#034867] text-center mx-auto"></span>
      </h1>
      <div class=" px-8 my-14 ">
        <div class="text-center w-full"></div>
        <div class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-3xl lg:text-5xl font-bold leading-tight">Any Question? </h2>
              <div class="text-gray-700 mt-8">
                You can send some <span class="underline">message</span> here
              </div>
            </div>
            <div class="mt-2 text-center">
              <img src={org} alt="" srcset="" style={{ width: "350px", height: "350px" }} />
            </div>
          </div>
          <div class="">
            <div>
              <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="mt-8">
              <button class="uppercase text-sm font-bold tracking-wide bg-[#041D33] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
