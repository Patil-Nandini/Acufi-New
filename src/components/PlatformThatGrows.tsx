"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Comparison() {
   const router = useRouter();
  return (
    <section
      className="relative py-20 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/A-platform-That-Grows-with-You-bg.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center relative ">
        <div className="text-center max-w-3xl mb-12">
          <span className="bg-black text-white text-xs font-semibold px-6 py-2 rounded-full text-[18px]">
            AcuFi
          </span>
          <h2 className="text-4xl md:text-4xl font-bold mt-4 text-gray-900">
            A platform That Grows with You
          </h2>
          <p className="text-[#0F1720]-600 mt-2 text-[18px]">
            See how AcuFi compares with traditional banking solutions.
          </p>
        </div>

        <div className="xl:w-[88%]  py-12 relative top-[124px] hidden md:block">
          <div
            className="hidden xl:block absolute top-0 left-0 xl:top-[-220px] xl:left-[-154] lg:left-[-130]"
            style={{
              // top: "-220px",
              // left: "-144px",
              zIndex: 10,
            }}
          >
            {/* <Image
            src="/man-Image.webp"
            alt="Man"
            width={600}
            height={760}
            className="max-h-[760px] w-auto"
            style={{
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.15))",
            }}
            priority
          /> */}
            <img
              src="https://acufi.com/wp-content/uploads/2025/08/man-Image-with-White.webp"
              alt="Man"
              className="max-h-[850px] w-auto"
              style={{
                filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.15))",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 ml-0 xl:ml-[75px] lg:ml-[95px] ">
            <div className="flex justify-center items-center">
              {/* <table className="w-full border border-gray-200 overflow-hidden bg-white rounded-[30px]"> */}
              <table className="w-[90%] lg:w-[100%] border border-gray-200 overflow-hidden bg-white rounded-[30px]">
                <thead
                  className="text-white"
                  style={{
                    background:
                      "linear-gradient(90.37deg, #095ABB -4.45%, #0D86D4 103.35%)",
                  }}
                >
                  <tr>
                    <th className="w-1/4 md:w-[30%] py-4 px-4 md:px-6 lg:px-15 text-left">
                      Features
                    </th>
                    <th className="w-1/3 md:w-[35%] py-4 px-4 md:px-6   lg:px-15 text-left">
                      Acufi
                    </th>
                    <th className="w-1/3 md:w-[35%] py-4 px-4 md:px-6  lg:px-15 text-left">
                      Traditional Banks
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4D4D8]">
                  <tr className="bg-[white]">
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-[#37404C]">
                      Account Setup Time
                    </td>
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-green-600 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Frame-2147226778.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="mr-2"
                          loading="lazy"
                        />
                        1 - 3 Days
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6   lg:px-15 text-red-500 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Icons.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="mr-2"
                          loading="lazy"
                        />
                        2 - 6 Weeks
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-4 md:px-6   lg:px-15 text-[#37404C]">
                      Credit Risk Insights
                    </td>
                    <td className="py-4 px-4 md:px-6   lg:px-15 text-green-600 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Frame-2147226778.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Real-Time Cash Flow analysis + Loan Stacking
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6   lg:px-15 text-red-500 font-medium">
                      <div className="flex items-start">
                        <Image
                          src="/Icons.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Outdated Reports <br />
                        (30 - 60 days)
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-4 md:px-6   lg:px-15 text-[#37404C]">
                      Industry Support
                    </td>
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-green-600 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Frame-2147226778.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Short-term lending, Peptides, Cannabis, Crypto, etc.
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-red-500 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Icons.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Declined
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-[#37404C]">
                      Fraud Detection
                    </td>
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-green-600 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Frame-2147226778.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Behavioral + Warnings
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-red-500 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Icons.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Minimal
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-[#37404C]">
                      Onboarding Experience
                    </td>
                    <td className="py-4 px-4 md:px-6  lg:px-15 text-green-600 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Frame-2147226778.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        100% Digital
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6   lg:px-15 text-red-500 font-medium">
                      <div className="flex items-center">
                        <Image
                          src="/Icons.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                          loading="lazy"
                        />
                        Paper-heavy, Slow
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full px-2 md:hidden">
          <div className="bg-white rounded-[15px] shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#095ABB] to-[#0D86D4] text-white text-center font-semibold text-[15px] py-2">
              Acufi
            </div>
            <div className="flex flex-col ">
              {[
                "Account Setup Time",
                "Credit Risk Insights",
                "Industry Support",
                "Fraud Detection",
                "Onboarding Experience",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col p-4 border-b border-gray-200 last:border-b-0 h-[208px] justify-around sm:h-auto sm:justify-start"
                >
                  <div className="font-semibold text-[#444] text-[14px] mb-2">
                    {feature}
                  </div>
                  <div className="flex items-center text-[#10A449] text-[13px]">
                    <Image
                      src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                      alt="Yes"
                      width={20}
                      height={20}
                      className="mr-2"
                      loading="lazy"
                    />
                    {
                      [
                        "1 - 3 Days",
                        "Real-Time Cash Flow analysis + Loan Stacking",
                        "Short-term lending, Peptides, Cannabis, Crypto, etc.",
                        "Behavioral + Warnings",
                        "100% Digital",
                      ][i]
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[15px] shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#095ABB] to-[#0D86D4] text-white text-center font-semibold text-[15px] py-2">
              Traditional Banks
            </div>
            <div className="flex flex-col">
              {[
                "Account Setup Time",
                "Credit Risk Insights",
                "Industry Support",
                "Fraud Detection",
                "Onboarding Experience",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col p-4 border-b border-gray-200 last:border-b-0 h-[208px] justify-around sm:h-auto sm:justify-start"
                >
                  <div className="font-semibold text-[#444] text-[14px] mb-2">
                    {feature}
                  </div>
                  <div className="flex items-center text-[#F83F3F] text-[13px]">
                    <Image
                      src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                      alt="No"
                      width={20}
                      height={20}
                      className="mr-2"
                      loading="lazy"
                    />
                    {
                      [
                        "2 - 6 Weeks",
                        "Outdated Reports (30 - 60 days)",
                        "Declined",
                        "Minimal",
                        "Paper-heavy, slow",
                      ][i]
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-30">
          <button
            type="button"
            className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[250px] px-7"
            style={{
              backgroundImage: "url('/AcuViewButtonBg.webp')",
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
            <span className="ml-2 whitespace-nowrap">Get Started!</span>
          </button>
        </div>
      </div>
    </section>
  );
}
