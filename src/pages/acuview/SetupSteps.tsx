"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";

export default function SetupSteps() {
   const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-20  bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/BgThreeStepProcess.webp')" }}
    >
      <div className="text-center">
        <h1 className="text-[25px] md:text-[40px] font-bold text-[#0F1720] mb-6 tracking-tight">
          Easy 3 Step set up  
        </h1>

        <div className="max-w-3xl mx-auto space-y-1">
          <p className="text-[18px] text-[#0F1720] font-light">
            Access the <span className="font-medium">AcuView</span> lender
            network
          </p>
        </div>
        <div className="flex flex-col items-center justify-start order-3 lg:order-2 pb-[40px] lg:pb-0">
          <button
            type="button"
            className="flex items-center justify-center h-[90px] text-[#fff] font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7 mt-5 ml-[-7px]"
            style={{
              backgroundImage: "url('/watchNowButtonBg.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              paddingBottom: "25px",
            }}
            aria-label="Start Your Free 90-Day Trial"
             onClick={() => router.push("/under-renovation")}
          >
            <Image
              src="/RocketIcon.png"
              alt="Rocket Icon"
              width={20}
              height={20}
              loading="lazy"
            />
            <span className="ml-2 whitespace-nowrap">Get Your Demo!</span>
          </button>
        </div>
      </div>
      <div className="relative flex  max-w-full h-full lg:h-full justify-center items-center flex-col lg:flex-row">
        {/* Desktop connectors */}
        <Image
          src="/SetUpimage1.png"
          alt="Connector1"
          width={300}
          height={100}
          className="absolute top-[25%] xl:left-[43%] w-[100%] hidden lg:block lg:left-[25%]"
          loading="lazy"
        />
        <Image
          src="/SetUpimage2.png"
          alt="Connector2"
          width={200}
          height={300}
          className="absolute top-[48%] left-[43%] h-[44%] hidden lg:block lg:left-[25%] xl:left-[43%]"
          loading="lazy"
        />

        {/* Tablet & Mobile connectors  */}
        <Image
          src="/TabViewPipeOne.png"
          alt="Connector for Step 1"
          width={370}
          height={370}
          className="absolute z-[1] block lg:hidden top-[12%] sm:top-[16%] sm:left-[51%] left-[26%] w-[90%] sm:w-[300px]"
          loading="lazy"
        />
        <Image
          src="/TabViewPipeTwo.png"
          alt="Connector for Step 2"
          width={370}
          height={370}
          className="absolute z-[1] block lg:hidden top-[50%] sm:top-[51%] sm:left-[-39%] md:left-[-53%] left-[-17%] w-[90%] sm:w-[300px]"
          loading="lazy"
        />

        <div className="relative z-[3] inline-grid lg:gap-[18%] sm:flex sm:flex-col sm:items-center sm:gap-[90px] gap-[50px]">
          <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[240px] sm:w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center lg:top-[127px] xl:left-[-183px] md:left-[15px] md:top-[0px] lg:left-[-237px]">
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-14%] left-[87%] sm:left-[-11%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 1 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-11%] left-[-13%] sm:left-[85%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 2 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>

            <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] bg-gradient-to-r from-[#2D6CED] to-[#2FB0D2] text-transparent bg-clip-text">
              Quick Setup
            </h3>
            <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
              <li className="mb-[18px]">
                1. Seamlessly integrates with existing LMS software
              </li>
              <li className="mb-[18px]">2. Minimal IT requirements</li>
              <li>3. Full training & support provided for your team</li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[240px] sm:w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center lg:top-[19px] xl:left-[343px] md:left-[18px] md:top-[-18px] lg:left-[278px]">
            {/* Icons */}
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-15%] left-[-13%] sm:left-[-12%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 3 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-11%] right-[-14%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 4 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>
            <div className=" hidden sm:block absolute w-[25%] h-[25%] flex items-center justify-center z-10 left-[32%] bottom-[-175%] sm:left-[-47%] md:left-[-67%] lg:left-[-25%]  md:bottom-[-36%] sm:bottom-[-32%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 5 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>

            <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] text-[#0094ff]">
              Immediate Results
            </h3>
            <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
              <li className="mb-[18px]">1. See loan attempts in real time</li>
              <li className="mb-[18px]">2. Gain actionable borrower insights from day one</li>
              <li>3. Start protecting your portfolio today</li>
            </ol>
          </div>

          <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[240px] sm:w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center lg:top-[15px] xl:left-[-169px] md:left-[24px] md:top-[-38px] lg:left-[-228px]">
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-14%] left-[-12%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 6 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-14%] right-[-12%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 7 time NOT adjusted.svg"
              >
                Icon
              </object>
            </div>

            <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] text-[#0071c2]">
              Ongoing Support
            </h3>
            <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
              <li className="mb-[18px]">
                1. Dedicated customer success manager
              </li>
              <li className="mb-[18px]">2. Regular updates</li>
              <li>3. Training materials</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
