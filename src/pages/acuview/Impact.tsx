"use client";

import Image from "next/image";
import "../../app/globals.css";

export default function StatsSection() {
  return (
    <div className="w-full flex justify-end relative z-2 top-[-152px]">
      <div className="w-[100%] lg:w-[90%] xl:w-[85%]  bg-[#015CB8] rounded-l-0  min-[1100px]:rounded-l-[260px] lg:rounded-l-[260px] flex flex-col min-[767px]:flex-row md:flex-row justify-end items-center text-white max-w-7xl overflow-hidden absolute">
        <div className="flex flex-row min-[767px]:hidden w-full p-[20px]">
          <div className="flex-1 flex flex-col items-center justify-center text-center py-3 px-2">
            <Image
              src="/Active Lenders.svg"
              alt="Active Lenders"
              width={25}
              height={25}
              loading="lazy"
            />
            <h2 className="text-[20px] font-extrabold mt-1">127+</h2>
            <p className="font-semibold text-[11px]">Active Lenders</p>
            <p className="text-[9px] mt-0.5">Growing Daily!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-3 px-2">
            <Image
              src="/Data Points.svg"
              alt="Data Points"
              width={25}
              height={25}
              loading="lazy"
            />
            <h2 className="text-[20px] font-extrabold mt-1">1M+</h2>
            <p className="font-semibold text-[11px]">Data Points</p>
            <p className="text-[9px] mt-0.5">Expanding Fast!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-3 px-2">
            <Image
              src="/Real-Time.svg"
              alt="Real Time"
              width={25}
              height={25}
              loading="lazy"
            />
            <h2 className="text-[20px] font-extrabold mt-1">24/7</h2>
            <p className="font-semibold text-[11px]">Real-Time</p>
            <p className="text-[9px] mt-0.5">Never Stops!</p>
          </div>
        </div>

        <div className="hidden md:flex flex-row w-full py-[30px] relative">
          <div className="flex-1 flex justify-center px-4 border-r-[2px] border-r-[#FFFFFF1A] h-[170px] min-[1100px]:h-[200px]">
            <div className="flex flex-col items-start justify-center">
              <Image
                src="/Active Lenders.svg"
                alt="Active Lenders"
                width={50}
                height={50}
                loading="lazy"
              />
              <h2 className="text-[40px] font-extrabold mt-2">127+</h2>
              <p className="font-semibold mt-1 text-[16px]">Active Lenders</p>
              <p className="text-[14px] mt-0.5">Growing Daily!</p>
            </div>
          </div>

          <div className="flex-1 flex justify-center px-4 border-r-[2px] border-r-[#FFFFFF1A] h-[170px] min-[1100px]:h-[200px]">
            <div className="flex flex-col items-start justify-center">
              <Image
                src="/Data Points.svg"
                alt="Data Points"
                width={50}
                height={50}
                loading="lazy"
              />
              <h2 className="text-[40px] font-extrabold mt-2">1M+</h2>
              <p className="font-semibold mt-1 text-[16px]">Data Points</p>
              <p className="text-[14px] mt-0.5">Expanding Fast!</p>
            </div>
          </div>

          <div className="flex-1 flex justify-center px-4 border-r-[2px] border-r-[#FFFFFF1A] h-[170px] min-[1100px]:h-[200px]">
            <div className="flex flex-col items-start justify-center">
              <Image
                src="/Real-Time.svg"
                alt="Real Time"
                width={50}
                height={50}
                loading="lazy"
              />
              <h2 className="text-[40px] font-extrabold mt-2">24/7</h2>
              <p className="font-semibold mt-1 text-[16px]">Real-Time</p>
              <p className="text-[14px] mt-0.5">Never Stops!</p>
            </div>
          </div>

          <div className="flex-1 flex justify-center pr-[20px] md:pl-[50px] pl-[45px] bg-white text-[#0033A1] rounded-l-[200px] min-[1100px]:rounded-l-[260px] md:ml-2 ml-15 py-[10px]">
            <div className="flex flex-col items-start justify-center w-full">
              <div className="relative flex items-center justify-start w-full image-with-gradient-border-bottom">
                <Image
                  src="/Impact.svg"
                  alt="Your Impact"
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <div className="absolute left-0 bottom-0 w-full h-[1px] gradient-border" />
              </div>

              <h2 className="text-xl font-extrabold mt-2 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent w-[100%]">
                YOUR IMPACT
              </h2>
              <p className="text-[15px] mt-1 text-[#504E4E] w-[100%]">
                Every signup makes the Lender network{" "}
                <span className="font-semibold">7x</span> more valuable for{" "}
                <span className="font-semibold">EVERYONE</span>!
              </p>
            </div>
          </div>
        </div>

        <div className="flex min-[767px]:hidden w-[75%] bg-white rounded-l-[60px] mt-[1] mb-[10px] self-end ml-[1]">
          <div className="flex flex-row items-center justify-start py-6 px-5 w-full">
            <Image
              src="/Impact.svg"
              alt="Your Impact"
              width={30}
              height={30}
              className="mr-3"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h2 className="text-base font-extrabold bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent">
                YOUR IMPACT
              </h2>
              <p className="text-[11px] mt-1 text-[#504E4E]">
                Every sign up makes the Lender network{" "}
                <span className="font-semibold">7x</span> more valuable for{" "}
                <span className="font-semibold">EVERYONE</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
