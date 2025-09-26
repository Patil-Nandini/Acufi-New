"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
const ExploringLenderNetwork = () => {
   const router = useRouter();
  const features = [
    {
      icon: "/Data-Powered Protection.png",
      title: "Data-Powered Protection",
      description:
        "Access a rapidly growing database of real-time borrower trends and risk patterns across the lending industry — updating every minute!",
      bg: "bg-white shadow-[0px_4px_4px_0px_#00000040]",
      titleColor: "text-[#17012C]",
      descColor: "#504E4E",
    },
    {
      icon: "/Industry-Wide Visibility.png",
      title: "Industry-Wide Visibility",
      description:
        "Get insights beyond your portfolio to detect risk patterns before they impact your business — powered by the collective intelligence of hundreds of lenders!",
      bg: "text-white shadow-[0px_4px_4px_0px_#00000040] bg-[#015CB8] bg-[url('/wingBlue.png')] bg-[length:36%_auto] bg-[top_right] bg-no-repeat border-none",
      titleColor: "text-white",
      descColor: "text-white",
    },

    {
      icon: "/Privacy-Focused Security.png",
      title: "Privacy-Focused Security",
      description:
        "Maintain strict compliance while benefiting from network-wide intelligence and shared protection that grows stronger every day!",
      bg: "bg-white shadow-[0px_4px_4px_0px_#00000040]",
      titleColor: "text-[#17012C]",
      descColor: "#504E4E",
    },
  ];

  return (
    <section className=" w-full bg-white py-16 px-5 lg:px-16 bg-[url('/THE-LENDER-NETWORK-IS-EXPLODING-BG.webp')] bg-no-repeat bg-cover font-sarabun pb-[200px]">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-[25px] md:text-[41px] font-extrabold text-gray-900">
          THE LENDER NETWORK IS EXPLODING!
        </h2>
        <div
          className="mt-6 inline-block bg-white rounded-xl px-6 py-3"
          style={{
            border: "1px solid #BDBDBD",
            boxShadow: "0px 2px 2px 0px #00000026",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/ThanksIcon.svg"
              alt="Thanks Icon"
              width={20}
              height={20}
              className="w-9 h-9"
            />
            <p className="text-[22px] font-bold text-[#17012C]">
              EVERY DAY MORE LENDERS JOIN!
            </p>
          </div>
          <p className="text-[16px] text-[#504E4E] mt-1">
            The <span className="font-bold">AcuView</span> network is growing at
            lightning speed, and every single new lender makes the system
            <br />
            <span className="font-bold">MORE POWERFUL</span> for everyone!
          </p>
        </div>
        <div className="mt-10 flex flex-col justify-start items-start max-w-6xl mx-auto">
          <h3 className="text-[25px] font-bold text-[#000000]">
            The More We Grow, The SMARTER We Get!
          </h3>
          <p className="mt-3 text-[18px] max-w-6xl text-[#0F1720] text-justify">
            <span className="font-bold">AcuView</span> isn&apos;t just software;
            it&apos;s a living, breathing intelligence network that gets more
            powerful every single day! With over 1 million borrower data points
            and new lenders joining daily, you&apos;re not just buying
            technology; you&apos;re joining a revolution that&apos;s
            transforming lending forever!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7 mt-5 ml-[-7px]"
          style={{
            backgroundImage: "url('/watchNowButtonBg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            paddingBottom: "25px",
          }}
          aria-label="Join The Network!"
          onClick={() => router.push("/under-renovation")}
        >
           <Image
            src="/RocketIcon.png"
            alt="Rocket Icon"
            width={20}
            height={20}
          />
          <span className="ml-2">Join The Network!</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className={`rounded-3xl shadow-md p-6 flex flex-col
              h-[330px] sm:h-[300px] md:h-[400px] lg:h-[320px]
              w-full sm:w-[300px] md:w-[240px] lg:w-[300px] ${f.bg} ${
              i === features.length - 1 ? "mr-5" : ""
            }`}
          >
            <div className="flex flex-col items-start gap-3">
              <Image src={f.icon} alt={f.title} width={80} height={80} />
              <h4 className={`text-[20px] font-[800] ${f.titleColor}`}>
                {f.title}
              </h4>
            </div>

            <p className={`mt-3 text-[16px] ${f.descColor}`}>{f.description}</p>

            <div className="flex-grow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploringLenderNetwork;
