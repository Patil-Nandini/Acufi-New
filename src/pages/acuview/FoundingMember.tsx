
"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
export default function FoundingBenefits() {
   const router = useRouter();
  return (
    <div className="sm:p-[20px]">
      <h2 className="text-[34px] sm:text-[36px] font-extrabold text-[#07102A] leading-tight flex items-center justify-center text-center p-[20px]">
        Become a Founding Member of the Future!​
      </h2>
      <p className="text-[#0F1720] text-[18px] text-center pt-[20px] font-normal max-w-[350px] mx-auto leading-snug block md:hidden">
        <span className="font-semibold">AcuView</span>
        &nbsp;is launching with an exclusive opportunity for forward-thinking
        lenders to join our founding lender network.
      </p>
      <p className="text-[#0F1720] text-[18px] text-center pt-[20px] flex justify-center hidden md:flex">
        <span className="text-[18px] font-semibold text-[#0F1720] mr-[5px] flex items-start justify-center">
          AcuView
        </span>
        is launching with an exclusive opportunity for forward-thinking lenders
        <br />
        to join our founding lender network.
      </p>
      <div className="flex justify-center">
        <button
          type="button"
          className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7 mt-5 ml-[-7px]"
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
          <span className="ml-2 whitespace-nowrap">Join The Network!</span>
        </button>
      </div>
      <div
        className="  relative mt-[20px]
  md:w-[768px] md:max-w-[768px]   
  lg:w-[1000px] lg:max-w-[1000px]  
  xl:w-[1200px] xl:max-w-[1200px]  
  h-[600px] 
  mx-auto"
      >
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/Flow.png"
            alt="Founding Flow"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          className=" block md:hidden relative mx-auto
    w-[320px] max-w-[320px]   
    h-[600px]"
        >
          <Image
            src="/FoundingVerticalImage.png"
            alt="Founding Flow Mobile"
            fill
            className="object-contain object-top"
            priority
          />
        </div>

        <div
          className="    relative hidden md:block 
    w-[768px] max-w-[768px]       
    lg:w-[1000px] lg:max-w-[1000px]  
    xl:w-[1200px] xl:max-w-[1200px]  
    mx-auto"
        >
          <div className="absolute top-[327px] left-[12px] w-[122px] text-[14px] xl:text-[16px] font-semibold text-[#0F1720] text-start md:text-start lg:text-center lg:top-[333px] lg:left-[28px]  xl:top-[339px] xl:left-[45px]">
            FREE 90-day trial (No credit card required)
          </div>
          <div className="absolute top-[253px] left-[148px] w-[122px] text-[14px] xl:text-[16px] font-semibold text-[#0F1720] text-start md:text-start lg:text-center lg:top-[240px] lg:left-[201px] xl:top-[228px] xl:left-[255px] ">
            Lifetime founding member pricing
          </div>
          <div className="absolute top-[187px] left-[276px] w-[122px] text-[14px] xl:text-[16px] font-semibold text-[#0F1720] text-start md:text-start lg:text-center lg:top-[156px] lg:left-[370px] xl:top-[133px] xl:left-[466px]">
            Priority support and training
          </div>
          <div className="absolute top-[187px] left-[385px] w-[122px] text-[14px] xl:text-[16px] font-semibold text-[#0F1720] text-start md:text-start lg:text-center lg:top-[158px] lg:left-[522px]  xl:top-[135px] xl:left-[641px]">
            Recognition as an industry pioneer
          </div>
          <div className="absolute top-[252px] left-[546px] w-[122px] text-[14px] xl:text-[16px] font-semibold text-[#0F1720] text-start md:text-start lg:text-center lg:top-[242px] lg:left-[699px]  xl:top-[228px] xl:left-[841px]">
            Direct input on product development
          </div>
          <div className="absolute top-[328px] left-[643px] w-[122px] text-[14px] xl:text-[16px] font-semibold text-[#0F1720] text-start md:text-start lg:text-center lg:top-[332px] lg:left-[853px]  xl:top-[341px] xl:left-[1044px]">
            Exclusive access to network intelligence
          </div>

          {/* Center title */}
          <div className="absolute top-[311px] left-[273px] text-[20px] lg:text-[24px] font-bold text-[#0F1720] text-center w-[215px] lg:w-[400px] xl:w-[650px] xl:top-[350px]">
            FOUNDING MEMBER BENEFITS
          </div>

          {/* Bottom note */}
          <div className="absolute bottom-[-55px] left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] xl:w-[40%] bg-[#FFE6E6]  lg:bottom-[-521px] text-[#EB4949] px-4 py-2 rounded-lg text-[14px] font-medium border border-[#F2A2A2] text-center md:bottom-[-470px] md:text-[16px] lg:bottom-[-520px]  lg:text-[18px] xl:bottom-[-559px] xl:text-[20px]">
            Limited to the Founding Members!
          </div>
        </div>

        {/* Benefits (Mobile) */}
        <div className="md:hidden relative w-[320px] h-[600px] mx-auto bottom-[600px]">
          <div className="absolute bottom-[510px] left-[71px] w-[122px] text-[14px] font-semibold text-[#0F1720]">
            FREE 90-day trial (No credit card required)
          </div>
          <div className="absolute bottom-[430px] left-[112px] w-[122px] text-[14px] font-semibold text-[#0F1720]">
            Lifetime founding member pricing
          </div>
          <div className="absolute bottom-[330px] left-[179px] w-[122px] text-[14px] font-semibold text-[#0F1720]">
            Priority support and training
          </div>
          <div className="absolute bottom-[246px] left-[163px] w-[122px] text-[14px] font-semibold text-[#0F1720]">
            Recognition as an industry pioneer
          </div>
          <div className="absolute bottom-[134px] left-[134px] w-[122px] text-[14px] font-semibold text-[#0F1720]">
            Direct input on product development
          </div>
          <div className="absolute bottom-[31px] left-[65px] w-[122px] text-[14px] font-semibold text-[#0F1720]">
            Exclusive access to network intelligence
          </div>

          <div className="absolute bottom-[285px] left-[-28px] text-[16px] font-bold text-[#0F1720] text-center w-[215px]">
            FOUNDING MEMBER BENEFITS
          </div>

          <div className="absolute bottom-[-55px] left-1/2 -translate-x-1/2 w-[90%] bg-[#FFE6E6] text-[#DC6262] px-4 py-2 rounded-lg text-[14px] font-medium border border-[#F2A2A2] text-center">
           Limited to the Founding Members!
          </div>
        </div>
      </div>
    </div>
  );
}
