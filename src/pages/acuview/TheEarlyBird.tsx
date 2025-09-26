import Image from "next/image";
import React from "react";
import "../../app/globals.css";

const TheEarlyBird: React.FC = () => {
  return (
    <div className="bg-[#0B2D58] relative w-full overflow-hidden">
      <Image
        src="/gear-icon.png"
        alt="Gear Right"
        width={100}
        height={100}
        className="hidden lg:block absolute top-[-26px] right-12 opacity-70 z-0 pointer-events-none"
        style={{ transform: "translateX(75%)" }}
        loading="lazy"
      />

      <Image
        src="/gear-icon.png"
        alt="Gear Left"
        width={100}
        height={100}
        className="hidden lg:block absolute top-76 left-2 opacity-70 z-0 pointer-events-none"
        style={{ transform: "translateX(-25%)" }}
        loading="lazy"
      />

      <Image
        src="/gear-icon.png"
        alt="Gear Right Tablet"
        width={79}
        height={79}
        className="hidden md:block lg:hidden absolute top-[-24px] right-9 opacity-70 z-0 pointer-events-none"
        style={{ transform: "translateX(75%)" }}
        loading="lazy"
      />

      <Image
        src="/gear-icon.png"
        alt="Gear Left Tablet"
        width={75}
        height={75}
        className="hidden md:block lg:hidden absolute top-80 left-5 opacity-70 z-0 pointer-events-none"
        style={{ transform: "translateX(-25%)" }}
        loading="lazy"
      />

      <Image
        src="/gear-icon.png"
        alt="Gear Right Mobile"
        width={56}
        height={56}
        className="block md:hidden absolute top-[-12px] right-6 opacity-80 z-0 pointer-events-none"
        style={{ transform: "translateX(75%)" }}
        loading="lazy"
      />

      <Image
        src="/gear-icon.png"
        alt="Gear Left Mobile"
        width={56}
        height={56}
        className="hidden absolute top-88 left-1.5 opacity-80 z-0 pointer-events-none"
        style={{ transform: "translateX(-25%)" }}
        loading="lazy"
      />

      <div className="w-full relative z-10">
        <div className="relative px-4 sm:px-6 py-12">
          <div className="flex justify-center mb-12">
            <button className="bg-white text-[#085AAC] px-5 py-1 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2">
              <img
                src="/rocket.svg"
                alt="Rocket Icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span>Don&apos;t Be the Last Lender to Join the Revolution!</span>
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold text-white mb-3">
              The Early Bird Gets the Worm
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              (And the Lender Network Effect)
            </h2>
          </div>

          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-[18px] text-gray-200 leading-relaxed px-2 sm:px-0">
              Every day you wait, loan stackers are becoming more adept at
              gaming the system. But more importantly, every day you wait, other
              lenders are joining the{" "}
              <span className="font-bold text-white">AcuView</span> network and
              gaining an advantage over you.
            </p>
          </div>

          <div className="bg-white rounded-[28px] px-6 py-4 w-full mx-auto overflow-hidden relative z-20">
            <div className="flex flex-wrap justify-center items-start gap-6 md:flex-row md:items-center lg:flex-row lg:items-center lg:flex-nowrap">
              {[
                {
                  title: "Real Time",
                  text: "See where borrowers are applying",
                },
                {
                  title: "48 Hrs",
                  text: "Is the professional borrowers' window before detection",
                },
                { title: "Daily", text: "New lenders joining the network" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="
                    bg-[#0B2D58] rounded-[20px] text-center flex flex-col justify-center shadow 
                    w-[220px]  sm:w-[240px] md:w-[30%] h-[200px]
                    lg:w-[25%]
                    max-[375px]:w-[230px] max-[375px]:h-[90px]
                    max-[320px]:w-[170px] max-[320px]:h-[85px]
                    px-4 py-3
                  "
                >
                  <h3 className="text-[20px]  md:text-[25px] lg:text-[30px] font-bold text-white mb-1 sm:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-white leading-tight min-h-[35px]">
                    {card.text}
                  </p>
                </div>
              ))}

              <div
                className="
                  bg-gradient-to-b from-[#0572E1] to-[#316DBF] rounded-[20px] relative flex flex-col shadow
                  w-full md:w-[80%] lg:w-[480px]
                  px-5 py-6
                  min-h-[220px] md:min-h-[200px]
                  max-[375px]:w-[90%] max-[375px]:mx-auto
                "
              >
                <div className="absolute top-4 right-4">
                  <img
                    src="/rocket2.svg"
                    alt="Rocket Icon"
                    className="w-10 h-10 text-white"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 pr-8 leading-tight">
                  The Lenders Who Join First Will
                </h3>
                <ul className="space-y-2 text-left text-[14px]">
                  <li className="flex items-start gap-2">
                    <img
                      src="/arrow-icon.svg"
                      alt="Arrow Icon"
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-white leading-snug">
                      Free-30 Days trial
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src="/arrow-icon.svg"
                      alt="Arrow Icon"
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-white leading-snug">
                      Lifetime founding members pricing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src="/arrow-icon.svg"
                      alt="Arrow Icon"
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-white leading-snug">
                      Direct input on product Development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src="/arrow-icon.svg"
                      alt="Arrow Icon"
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-white leading-snug">
                      Recognition as an industry pioneer
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEarlyBird;
