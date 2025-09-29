"use client";
import Image from "next/image";
import React from "react";
import HowAcuViewWorks from "./HowAcuViewWorks";
import "../../app/globals.css";

export default function HiddenCrisisSection() {
  return (
    <section
      className="relative flex flex-col justify-start items-center w-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/The-Hidden-Crisis-in-Lending-bg.webp')",
      }}
    >
      <div className="max-w-7xl  py-16 px-4 relative z-10">
        {/* Title and subtitle */}
        <div className="mb-12">
          <h2 className="text-[25px] md:text-[40px] font-bold text-gray-900 mb-4">
            The Hidden Crisis in Lending
          </h2>
          <p className="text-lg text-gray-700">
            Loan stacking is draining your profits, silently and daily.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center gap-10">
          {/* Left Side - Stats */}
          <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 sm:gap-30 w-[100%] sm:justify-items-center lg:justify-items-start">
            {/* Stat 1 */}
            <div className="relative bg-white rounded-[30px] px-5 py-7 w-[200px] sm:w-[260px] h-[155px] sm:h-[200px] shadow-[0px_8px_16px_0px_#0000001A]">
              <Image
                src="/money-hand1.svg"
                alt="Borrowers Icon"
                width={48}
                height={48}
                priority
                className="absolute -top-6 right-1 w-15 h-15  sm:-top-7 sm:left-58"
              />
              <div className="flex items-baseline">
                <div className="text-[25px] sm:text-[40px] font-bold mr-2 bg-gradient-to-tr from-[#034E9A] via-[#2390FC] to-[#2390FC] bg-clip-text text-transparent">
                  37%
                </div>
                <div className="text-[20px] font-bold bg-gradient-to-tr from-[#034E9A] via-[#2390FC] to-[#2390FC] bg-clip-text text-transparent">
                  Of Borrowers
                </div>
              </div>

              <div className="text-[#504E4E] text-[14px] sm:text-[16px] text-center">
                Hold multiple payday loans.
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative bg-white rounded-[30px]  px-5 py-7 w-[200px] sm:w-[260px] h-[155px] sm:h-[200px] shadow-[0px_8px_16px_0px_#0000001A]">
              <Image
                src="/money-hand2.svg"
                alt="Juggle Loans Icon"
                width={48}
                height={48}
                priority
                className="absolute -top-6 right-1 w-15 h-15  sm:-top-7 sm:left-58"
              />
              <div className="flex items-baseline">
                <div className="text-[25px] sm:text-[40px] font-bold mr-2 bg-gradient-to-tr from-[#034E9A] via-[#2390FC] to-[#2390FC] bg-clip-text text-transparent">
                  25%
                </div>
                <div className="text-[20px] font-bold bg-gradient-to-tr from-[#034E9A] via-[#2390FC] to-[#2390FC] bg-clip-text text-transparent">
                  Juggle Four Or More
                </div>
              </div>

              <div className="text-[#504E4E] text-[14px] sm:text-[16px] text-center">
                Active loans.
              </div>
            </div>

            <div className="relative bg-white rounded-[30px] shadow-[0px_8px_16px_0px_#0000001A] px-5 py-7 col-span-2 justify-self-center w-[200px] sm:w-[260px] h-[155px] sm:h-[200px]">
              <Image
                src="/money-hand3.svg"
                alt="Default Rate Icon"
                width={48}
                height={48}
                priority
                className="absolute -top-6 right-1 w-15 h-15  sm:-top-7 sm:left-58"
              />
              <div className="flex items-baseline">
                <div className="text-[25px] sm:text-[40px] font-bold mr-2 bg-gradient-to-tr from-[#034E9A] via-[#2390FC] to-[#2390FC] bg-clip-text text-transparent">
                  3x
                </div>
                <div className="text-[20px] font-bold bg-gradient-to-tr from-[#034E9A] via-[#2390FC] to-[#2390FC] bg-clip-text text-transparent">
                  Higher Default Rates
                </div>
              </div>

              <div className="text-[#504E4E] text-[14px] sm:text-[16px] text-center">
                Stacked loans default at a higher rate.
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:items-end lg:justify-end w-full">
            <object
              type="image/svg+xml"
              data="/Acuview-Hidden-crysis.svg"
              className="w-[70%] h-full"
              aria-label="The Hidden Loans Animation"
            >
              Acuview-Hidden-crysis
            </object>

            <img
              src="/star.png"
              alt="star icon"
              className="hidden sm:block absolute top-65 left-12 w-15 h-15"
            />
            <img
              src="/triangle.png"
              alt="triangle icon"
              className="hidden sm:block absolute top-[-45] right-8 w-15 h-15"
            />
            <img
              src="/circle.png"
              alt="circle icon"
              className="hidden sm:block absolute bottom-[16] sm:right-[160px] lg:right-[26px] right-[57px] xl:right-[54px] w-12 h-12"
            />

            {/* AcuView changes everything */}
            <div className="relative z-10 mt-6 flex items-center justify-center w-[70%]">
              <div className="bg-white rounded-xl shadow-md px-6 py-3 flex items-center justify-center border border-[#E3E3E3] shadow-[0px_4px_10px_0px_#00000014]">
                <span className="text-[#0F1720] text-[16px]">
                  <span className="text-[#0F1720] text-[16px] font-bold">
                    AcuView
                  </span>{" "}
                  changes everything.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowAcuViewWorks />
    </section>
  );
}
