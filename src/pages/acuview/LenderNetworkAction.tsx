"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";

export default function LenderNetworkEffect() {
   const router = useRouter();
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 pt-45"
      style={{ backgroundImage: "url('/LenderActionBg.png')" }}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[40px] font-extrabold text-white">
          The Lender Network Effect In Action
        </h2>

        <p className="mt-4 text-[18px] text-[#FFFFFFD1] max-w-3xl leading-relaxed">
          More Lenders = More Data = Better Decisions = Lower Risks For All ={" "}
          <span className="font-bold text-[#FFFFFFD1]">Greater Profits</span>
          <span className="font-semibold ml-[5px]">For All</span>
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
              src="/WatchDemo.png"
              alt="Demo Icon"
              width={20}
              height={20}
            />
            <span className="ml-2">Watch Now!</span>
          </button>
          
        </div>
        <div className="mt-10 w-full flex justify-center">
          <object
            type="image/svg+xml"
            data="/lender-compressed.svg"
            className="w-full max-w-4xl h-auto"
          >
            Your browser does not support SVG animation.
          </object>
        </div>
      </div>
    </section>
  );
}
