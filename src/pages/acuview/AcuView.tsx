"use client";

import React from "react";
import "../../app/globals.css";
export default function AcuviewBanner() {
  return (
    <section className="w-full flex justify-center py-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#011634] rounded-[25px] shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="flex-1 text-white p-8 md:p-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug max-w-md">
            Revolutionizing lending with the world&apos;s first real-time loan
            stacking detection network.
          </h2>
        </div>

      <div className="flex justify-center items-center bg-[url('/circuit-design.svg')] bg-cover bg-right p-8 md:p-3 w-full md:w-[30%]">
  <object
    type="image/svg+xml"
    data="/AcuViewLogo-baner.svg"
    className="w-[200px] h-[200px] md:w-[312] md:h-[312px] flex items-center justify-center"
  >
    Acuview Logo
  </object>
</div>

      </div>
    </section>
  );
}
