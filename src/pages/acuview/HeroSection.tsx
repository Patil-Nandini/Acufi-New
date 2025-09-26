"use client";

import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
   const router = useRouter();
  return (
    <>
      <section className="relative bg-white px-4 sm:px-8 lg:px-0 py-12 lg:py-20 font-sarabun mt-10 flex items-center justify-center hidden lg:flex xl:px-12">
        <div className="lg:hidden-w-[90%] lg:max-w-[1024px] xl:max-w-[1280] grid grid-cols-1 lg:grid-cols-2  items-center">
          <div className="lg:max-w-[520px] xl:max-w-[650] flex flex-col items-start justify-center pl-[30px]">
            <div className="inline-flex items-center gap-2 bg-black text-white text-xs sm:text-sm lg:px-5 xl:px-4 py-2 rounded-full font-semibold mb-4 max-w-[520px]">
              <span className="flex gap-1">
                <Image
                  src="/AwardIcon.svg"
                  alt="Rocket Icon"
                  width={20}
                  height={20}
                />
                WORLD&apos;S FIRST PATENTED TECHNOLOGY
              </span>
            </div>
            <h1 className="text-[27px] sm:text-[50px] lg:text-[38px] xl:text-[50px] font-black leading-tight text-[#000000]">
              <span >See What Some Borrowers</span>{" "}
              <br className="hidden xl:block" />
              <span
                className="inline-block py-[20px] px-[32px] sm:px-[47px] sm:py-[20px] lg:py-[31px] rounded-[60px] text-[35px] md:text-[35px] font-bold ml-[-7px] lg:pb-[px]  "
                style={{
                  backgroundImage: "url('dont.png')",
                  color: "#FFFFFF",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  // padding: "20px 47px",
                }}
              >
                DON&apos;T
              </span>
              Want You To See!
            </h1>
            <div
              className="relative bg-cover bg-no-repeat bg-center rounded-2xl h-[414px] w-[609px] max-w-[461px] lg:w-[520px] lg:h-[314px] xl:w-[581px] xl:h-[395px] xl:max-w-[581px] mt-5"
              style={{ backgroundImage: "url('/LeftsideContentBg.png')" }}
            >
              <div className="absolute inset-0 flex">
                <div className="flex flex-col justify-between h-full pl-8 pt-8 lg:pt-4 pb-8 w-[45%]">
                  <div>
                    <h2 className="text-[22px] font-bold text-[#333]">
                      Real-Time Loan Intelligence
                    </h2>
                    <p className="text-[16px] text-[#333] mt-2 font-normal pb-[10px] xl:pb-0 ">
                      Built to protect every dollar you lend
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/BlueImage.png"
                      alt="Loan Intelligence"
                      width={120}
                      height={120}
                      className="w-[200px] rounded-xl lg:w-[150px] xl:w-[200px]"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="relative flex flex-col justify-between h-full w-[55%] pr-8 py-8">
                  <div className="absolute top-0 right-0 w-[100%] h-[48%] rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-[30px] px-8 py-7 lg:py-0  xl:py-7 flex flex-col gap-1">
                    <div className="flex justify-end items-center w-[100%]">
                      <object
                        type="image/svg+xml"
                        data="/bannerright.svg"
                        className="h-[52px]"
                        aria-label="AcuView Icon"
                      >
                        Acuview
                      </object>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-bold text-[18px]">
                        AcuView
                      </span>
                    </div>
                    <p className="text-white text-[17px] lg:text-[14px] xl:text-[17px]">
                      It is the only technology in the world that shows you in
                      real time customer data
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0  h-[40%] rounded-br-2xl rounded-tl-none rounded-bl-none px-8 py-7 flex items-center justify-start">
                    <p className="text-white text-[17px] lg:text-[14px] xl:text-[17px]">
                      It alerts you when your borrower is simultaneously
                      applying for loans with other stores or online lenders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-start lg:max-w-[500px] xl:max-w-[630px]">
            <div className="relative w-full h-[280px] sm:h-[360px] xl:w-[570px] xl:h-[411px]  rounded-2xl overflow-hidden lg:object-contain xl:object-cover xl:mt-[45px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/Blue_Waves-New.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex gap-4 w-full bg-transparent justify-center items-start lg:mt-[20px]">
              <div
                className="group relative bg-transparent z-10 w-[230px] h-[157px] lg:w-[230px] lg:h-[157px] xl:w-[250px] xl:h-[167px] flex flex-col justify-start items-center text-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 rounded-[20px] bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: "url('/primary.png')" }}
               onClick={() => router.push("/under-renovation")}
              >
                <div className="flex justify-end w-full mr-4">
                  <Image
                    src="https://acufi.com/images/Arrow1Icon.svg"
                    alt="Arrow Icon"
                    width={35}
                    height={35}
                    className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45"
                  />
                </div>
                <p className="text-[18px] lg:text-[16px] xl:text-[18px] text-start mb-7 pt-5">
                  Join the lender network
                  <br /> Free 30-Day Trial
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="group relative z-10 w-[230px] h-[139px] lg:w-[230px] lg:h-[139px] xl:w-[250px] xl:h-[151px] flex flex-col justify-center items-center text-[#04254F] p-4 transition-transform duration-300 ease-in-out hover:scale-105  rounded-[20px] bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: "url('/WhiteBgButton.png')" }}
              onClick={() => router.push("/under-renovation")}
              >
                <div className="flex justify-end w-full mr-4 xl:pt-[10px]">
                  <Image
                    src="BlueArrow.svg"
                    alt="Arrow Icon"
                    width={35}
                    height={35} 
                    className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45 lg:mt-[15px] xl:mt-[0] "
                  />
                </div>
                <p className="text-[18px] lg:text-[16px] xl:text-[18px] text-start mb-7 pt-5">
                  See AcuView In Action <br />
                  15-Minutes Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white  py-12 lg:py-20 font-sarabun mt-10 lg:hidden w-[100%]">
        <div className="w-[90%] xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 sm:gap-[10] items-center lg:w-[100%]">
          <div className="w-[100%] py-4 pt-10">
            <div className="inline-flex items-center gap-2 bg-black text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold mb-4">
              <span className="flex gap-1">
                {" "}
                <Image
                  src="/AwardIcon.svg"
                  alt="Rocket Icon"
                  width={20}
                  height={20}
                />
                WORLD&apos;S FIRST PATENTED TECHNOLOGY
              </span>
            </div>

            <h1 className="text-[25px] sm:text-[40px] font-black leading-tight text-[#000000] uppercase">
              <span>See What Some Borrowers</span>
              <span
                className="inline-block py-[20px] px-[32px] sm:px-[47px] sm:py-[20px] rounded-[60px] text-[22px] md:text-[35px] font-bold ml-[-1px] sm:ml-[-7px] "
                style={{
                  backgroundImage: "url('dont.png')",
                  color: "#FFFFFF",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                DON&apos;T
              </span>
              Want You To See!
            </h1>
            <div className="flex items-center justify-center w-full flex-col">
              <div className=" hidden md:block relative bg-cover bg-no-repeat bg-center rounded-2xl  xl:h-[414px] lg:w-[480px] lg:h-[306px] xl:w-[609px] md:w-[676px] md:h-[428px] mt-5 md:bg-[url('/tabview-bg-acuview.webp')] bg-[url('/LeftsideContentBg.png')]">
                <div className="absolute inset-0 flex md:w-[676px] md:h-[428px] lg:w-[100%] lg:h-[370px] xl:w-[589px] ">
                  <div className="flex flex-col justify-between h-full pl-8 pt-8 lg:pt-3 xl:pt-8 pb-8 w-[45%]">
                    <div>
                      <h2 className="text-[22px]  xl:text-[22px]  lg:text-[20px] font-bold text-[#333]">
                        Real-Time Loan Intelligence
                      </h2>
                      <p className="text-[16px] md:text-[17px] lg:twxt-[15px] xl:text-[17px] text-[#333] mt-2 font-normal">
                        Built to protect every dollar you lend
                      </p>
                    </div>
                    <div className="lg:mb-[46px] xl:mb-[0]">
                      <Image
                        src="/BlueImage.png"
                        alt="Loan Intelligence"
                        width={120}
                        height={120}
                        className="xl:w-[200px] lg:w-[150px] md:w-[250px] rounded-xl"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-between h-full w-[55%] xl:w-[55%] lg:w-[44%] pr-8 py-8 md:left-[27px]">
                    <div className="absolute top-0 right-0 w-[100%] h-[48%] rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-[30px] lg:px-0 lg:py-0 xl:px-8 xl:py-7  px-8 py-7  flex flex-col gap-1 xl:right-0">
                      <div className="flex justify-end items-center w-[100%]  ">
                        <object
                          type="image/svg+xml"
                          data="/bannerright.svg"
                          className="h-[52px]"
                          aria-label="AcuView Icon"
                        >
                          Acuview
                        </object>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-bold text-[18px]">
                          AcuView
                        </span>
                      </div>
                      <p className="text-white text-[17px] lg:text-[15px] xl:text-[17px] ">
                        It is the only technology in the world that shows you in
                        real time customer data
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0  xl:h-[40%] lg:h-[66%]  rounded-br-2xl rounded-tl-none rounded-bl-none xl:px-8 lg:px-[0] px-8 py-7 flex items-center justify-start">
                      <p className="text-white text-[17px] lg:text-[15px] xl:text-[17px]">
                        It alerts you when your borrower is simultaneously
                        applying for loans with other stores or online lenders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <div className="w-[288px] md:w-[700px] bg-[linear-gradient(90deg,#F2F2F4_6.12%,#F8F8FA_100%)] rounded-[25px] flex flex-col justify-center items-center px-4 sm:pt-[30px] md:hidden pt-[30px] pb-[30px]">
              <div className="flex items-center justify-center flex-col md:flex-row h-[500px] max-h-[510px] md:max-h-[0] md:h-[0]">
                <div className="text-center mb-6 pt-[10px]">
                  <h2 className="text-[20px] font-bold text-[#0F1720]">
                    Real-Time Loan Intelligence
                  </h2>
                  <p className="text-[15px] text[#0F1720]">
                    Built to protect every dollar you lend
                  </p>
                  <Image
                    width={100}
                    height={100}
                    src="/BlueImageMobile.png"
                    alt="Loan Intelligence"
                    className="rounded-xl w-full h-auto mt-[20px]"
                  />
                </div>
                <div
                  className="relative h-[320px] md:h-[500px] max-w-[300px] rounded-xl p-5 text-white bg-cover bg-center"
                  style={{ backgroundImage: "url('/acuview-bg.webp')" }}
                >
                  <div className="mb-6">
                    <div className="flex items-start  flex-col ">
                      <div className="w-[100%] flex items-end justify-end">
                        <object
                          type="image/svg+xml"
                          data="/bannerright.svg"
                          className="h-[52px]"
                          aria-label="AcuView Icon"
                        >
                          Acuview
                        </object>
                      </div>
                      <h3 className="font-bold mb-2">AcuView</h3>
                    </div>
                    <p className="text-[15px] relative top-[-5px]">
                      It is the only technology in the world that shows you in
                      real time.
                    </p>
                  </div>
                  <div className="min-h-[107px] flex ">
                    <p className="text-[15px] flex relative top-[24px]">
                      It alerts you when your borrower is simultaneously
                      applying for loans with other stores or online lenders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-center gap-6 w-[100%] sm:h-[770px] md:h-[748px] lg:h-[579px] lg:w-[50%]">
            <div className="relative w-[100%] h-[206px] sm:h-[770px] sm:w-[500px] md:w-[736px] xl:w-[600px] xl:h-[423px] lg:w-[436px] lg:h-[317px] rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain sm:object-cover lg:w-[440px] lg:h-[317px] xl:w-[517px] xl:h-[366px] "
              >
                <source src="/Blue_Waves-New.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex gap-4 lg:gap-1 w-full bg-transparent flex-col md:flex-row items-center md:justify-center">
              <div
                className="group relative bg-transparent z-10 w-[302px] h-[200px]  xl:w-[302px] xl:h-[200px]  lg:w-[248px] lg:h-[158px] flex flex-col justify-start md:justify-center items-center text-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 rounded-[20px] bg-cover bg-center cursor-pointer mt-[20px]"
                style={{ backgroundImage: "url('/primary.png')" }}
                 onClick={() => router.push("/under-renovation")}
              >
                <div className="flex justify-end w-full mr-4">
                  <Image
                    src="https://acufi.com/images/Arrow1Icon.svg"
                    alt="Arrow Icon"
                    width={35}
                    height={35}
                    className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45"
                  />
                </div>
                <p className="text-[15px]  sm:text-[18px] text-start mb-7 pt-5">
                  Join the lender network
                  <br /> Free 30-Day Trial
                </p>
              </div>

              <div
                className="group relative z-10 w-[300px] h-[180px] lg:w-[230px] lg:h-[139px] flex flex-col justify-center items-center text-[#04254F] p-4 transition-transform duration-300 ease-in-out hover:scale-105  rounded-[20px] bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: "url('/WhiteBgButton.png')" }}
               onClick={() => router.push("/under-renovation")}
              >
                <div className="flex justify-end w-full mr-4">
                  <Image
                    src="BlueArrow.svg"
                    alt="Arrow Icon"
                    width={35}
                    height={35}
                    className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45"
                  />
                </div>
                <p className="text-[15px] sm:text-[18px] text-start mb-7 pt-5">
                  See AcuView In Action <br />
                  15-Minutes Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section className="relative bg-white py-12 md:py-16 font-sarabun mt-10 w-full md:block lg:hidden">
      <div className="w-[90%] mx-auto flex flex-col gap-4 items-center">
        <div className="w-full py-4 pt-10">
          <div className="inline-flex items-center gap-2 bg-black text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold mb-4">
            <Image
              src="/AwardIcon.svg"
              alt="Award Icon"
              width={20}
              height={20}
            />
            WORLD&apos;S FIRST PATENTED TECHNOLOGY
          </div>

          <h1 className="text-[25px] sm:text-[32px] font-black leading-tight text-[#000000] uppercase">
            <span>See What Some Borrowers </span>
            <span
              className="inline-block py-[12px] px-[28px] sm:px-[36px] rounded-[60px] text-[22px] sm:text-[28px] font-bold"
              style={{
                backgroundImage: "url('dont.png')",
                color: "#FFFFFF",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              DON&apos;T
            </span>{" "}
            Want You To See!
          </h1>

          <div className="hidden md:block relative bg-cover bg-no-repeat bg-center rounded-2xl w-full h-[428px] mt-5 bg-[url('/tabview-bg-acuview.webp')]">
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between h-full pl-8 pt-6 pb-8 w-[45%]">
                <div>
                  <h2 className="text-[20px] font-bold text-[#333]">
                    Real-Time Loan Intelligence
                  </h2>
                  <p className="text-[16px] text-[#333] mt-2">
                    Built to protect every dollar you lend
                  </p>
                </div>
                <Image
                  src="/BlueImage.png"
                  alt="Loan Intelligence"
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
              </div>

              <div className="relative flex flex-col justify-between h-full w-[55%] pr-6 py-6">
                <div className="absolute top-0 right-0 w-full h-[50%] rounded-tr-2xl p-6">
                  <div className="flex justify-end w-full">
                    <object
                      type="image/svg+xml"
                      data="/bannerright.svg"
                      className="h-[52px]"
                      aria-label="AcuView Icon"
                    >
                      Acuview
                    </object>
                  </div>
                  <span className="text-white font-bold text-[18px]">AcuView</span>
                  <p className="text-white text-[15px] mt-2">
                    It is the only technology in the world that shows you in real
                    time customer data
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 p-6">
                  <p className="text-white text-[15px]">
                    It alerts you when your borrower is simultaneously applying
                    for loans with other stores or online lenders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="w-[288px] md:w-[700px] bg-gradient-to-r from-[#F2F2F4] to-[#F8F8FA] rounded-[25px] flex flex-col justify-center items-center px-4 pt-[30px] md:hidden">
            <div className="flex flex-col items-center">
              <div className="text-center mb-6">
                <h2 className="text-[20px] font-bold text-[#0F1720]">
                  Real-Time Loan Intelligence
                </h2>
                <p className="text-[15px] text-[#0F1720]">
                  Built to protect every dollar you lend
                </p>
                <Image
                  width={100}
                  height={100}
                  src="/BlueImageMobile.png"
                  alt="Loan Intelligence"
                  className="rounded-xl w-full h-auto mt-5"
                />
              </div>

              <div
                className="relative h-[320px] max-w-[300px] rounded-xl p-5 text-white bg-cover bg-center"
                style={{ backgroundImage: "url('/acuview-bg.webp')" }}
              >
                <div className="mb-6">
                  <div className="flex flex-col">
                    <div className="flex justify-end w-full">
                      <object
                        type="image/svg+xml"
                        data="/bannerright.svg"
                        className="h-[52px]"
                        aria-label="AcuView Icon"
                      >
                        Acuview
                      </object>
                    </div>
                    <h3 className="font-bold mb-2">AcuView</h3>
                  </div>
                  <p className="text-[15px]">
                    It is the only technology in the world that shows you in real
                    time.
                  </p>
                </div>
                <div className="min-h-[107px]">
                  <p className="text-[15px] mt-6">
                    It alerts you when your borrower is simultaneously applying
                    for loans with other stores or online lenders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default HeroSection;
