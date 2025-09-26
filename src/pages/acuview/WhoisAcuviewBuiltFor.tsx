"use client";
import Image from "next/image";
import React from "react";
import "../../app/globals.css";

type Card = {
  title: string;
  desc: string;
  icon: string;
  bg: string;
  gradient: string;
  tabletGradient: string;
};

const cards: Card[] = [
  {
    title: "67% Reduction",
    desc: "In loan stacking",
    icon: "/70-Reduction-Growing.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #FFE8E8 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #FFE8E8 70%)",
  },
  {
    title: "Industry-Wide Visibility",
    desc: "See your customer borrowing pattern with other Lenders",
    icon: "/Industry-Wide-Visibility.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #FEF4DC 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #FEF4DC 70%)",
  },
  {
    title: "99% Faster",
    desc: "Customer verification",
    icon: "/99-Faster-.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #E5E5FF 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #E5E5FF 70%)",
  },
  {
    title: "Privacy-Focused Design",
    desc: "You stay anonymous, and your portfolio stays protected",
    icon: "/Privacy-focused-Design.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #CBEDF9 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #CBEDF9 70%)",
  },
  {
    title: "1 < second Processing",
    desc: "Lightning-fast and unbreakable",
    icon: "/3ms-Processing.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #CDF9EE 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #CDF9EE 70%)",
  },
  {
    title: "Lender Network Effect",
    desc: "Grow stronger every day with each new lender",
    icon: "/Lender-Network-Effect.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #FFE6E6 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #FFE6E6 70%)",
  },
];

const WhoisAcuViewBuiltFor: React.FC = () => {
  return (
    <section className="w-[100%] font-sarabun bg-[url('/Indroducing-Section-bg.png')] static bg-no-repeat bg-cover pt-8 pb-28 md:pb-1 flex flex-col justify-center items-center ">
      <div className="max-w-8xl mx-auto px-6 flex justify-center">
        <div className="text-center flex flex-col justify-center max-w-5xl">
          <h2 className="text-[34px] sm:text-[36px] font-extrabold text-[#07102A] leading-tight">
            Who is AcuView Built for?
          </h2>
          <p className="text-[#0F1720] text-[18px] text-center pt-[20px] mx-auto w-[60%] leading-relaxed">
            <span className="text-[18px] font-semibold text-[#0F1720] mr-[5px]">
              AcuView
            </span>
            is designed for lenders who can&apos;t afford to guess, such as those
            operating in fast-moving, high-risk, or high-volume lending
            environments where every decision impacts profitability.
          </p>
          <div className="flex items-center justify-center gap-2 bg-[#085AAC] text-white px-5 py-3 rounded-[40px] w-fit mx-auto mt-6">
            {" "}
            <img
              src="/affiliate-marketing.svg"
              alt="Affiliate Marketing"
              className="w-5 h-5"
            />{" "}
            <p className="text-[16px] font-semibold">
              {" "}
              Powered by the Lender Network Effect!{" "}
            </p>{" "}
          </div>
        </div>
      </div>
      <section className="relative w-full font-sarabun pb-32 flex flex-col justify-center items-center hidden lg:block">
        <div className="relative w-full max-w-[1920px] md:h-[637px]  lg:h-auto">
          <object
            type="image/svg+xml"
            data="/Who-is-acuview-built-for.svg"
            className="w-[100%] h-auto max-w-[1920px]"
          >
            Your browser does not support SVG
          </object>
          {/* Card 1 */}
          <div className="absolute top-[45%] left-[9%] lg:left-[5%] xl:left-[9%] w-[220px] sm:w-[250px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                Short-Term & Payday Lenders
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Protect against loan stacking across nearby stores.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-[43%] left-[74%] lg:left-[71%] xl:left-[74%] w-[220px] sm:w-[250px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                Online Lenders
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Detect borrowers applying to multiple platforms simultaneously.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-[73.5%] left-[28%] lg:left-[25%] xl:left-[29%] w-[220px] sm:w-[260px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                BNPL (Buy Now, Pay Later) Platforms
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Validate whether customers are stacking multiple BNPL purchases
                in real time.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="absolute top-[73.5%] left-[55%] lg:left-[52%] xl:left-[55%] w-[220px] sm:w-[260px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                Installment & Personal Loan Providers
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Verify ability-to-repay with real-time borrower data. Identify
                hidden liabilities before onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full font-sarabun pb-32 flex flex-col justify-center items-center lg:hidden">
        <div className="relative w-full max-w-[1920px] md:h-[637px] md:max-h-[637px] lg:max-h-auto lg:h-auto ">
          <Image
            src="/bg-line-for-tab.webp"
            alt="Background line"
            width={1920}
            height={1080}
            className="w-full h-auto max-w-[1920px] hidden md:block"
            loading="lazy"
            priority
          />
          <Image
            src="/Linevertical.webp"
            alt="Background line"
            width={1920}
            height={1080}
            className="w-full h-[1200px] max-w-[300px] md:hidden "
            priority
            loading="lazy"
          />
          {/* Card 1 */}
          <div className="absolute top-[1%] left-[16%] lg:left-[5%] md:left-[5%] md:top-[4%] w-[250px] md:w-[300px] text-center flex flex-col items-center">
            <object
              type="image/svg+xml"
              data="/acuview-Icon-1.svg"
              className="w-35 h-35"
            >
              Your browser does not support SVG
            </object>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-md p-4 w-full md:h-[147px]">
              <h3 className="font-bold text-[#0F1720] text-[17px]">
                Short-Term & Payday Lenders
              </h3>
              <p className="text-[16px] text-gray-600 mt-1">
                Protect against loan stacking across nearby stores.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-[31%] left-[8%] lg:left-[71%] xl:left-[74%] md:top-[5%] md:left-[49%] w-[250px] md:w-[300px] text-center flex flex-col items-center">
            <object
              type="image/svg+xml"
              data="/acuview-Icon-2.svg"
              className="w-35 h-35"
            >
              Your browser does not support SVG
            </object>
            <div className="bg-white rounded-xl shadow-md p-4 md:h-[147px]">
              <h3 className="font-bold text-[#0F1720] text-[17px]">
                Online Lenders
              </h3>
              <p className="text-[16px] text-gray-600 mt-1">
                Detect borrowers applying to multiple platforms simultaneously.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-[56%] left-[10%] lg:left-[25%] xl:left-[29%] w-[250px] md:left-[5%] md:top-[56%] md:w-[300px]  text-center flex flex-col items-center">
            <object
              type="image/svg+xml"
              data="/acuview-Icon-3.svg"
              className="w-35 h-35"
            >
              Your browser does not support SVG
            </object>
            <div className="bg-white rounded-xl shadow-md p-4 md:h-[147px]">
              <h3 className="font-bold text-[#0F1720] text-[17px]">
                BNPL (Buy Now, Pay Later) Platforms
              </h3>
              <p className="text-[16px] text-gray-600 mt-1 ">
                Validate whether customers are stacking multiple BNPL purchases
                in real time.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="absolute top-[86%] left-[15%] lg:left-[52%] xl:left-[55%] w-[250px] md:top-[55%] md:w-[300px] md:left-[49%] text-center flex flex-col items-center">
            <object
              type="image/svg+xml"
              data="/acuview-Icon-4.svg"
              className="w-35 h-35"
            >
              Your browser does not support SVG
            </object>
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-[#0F1720] text-[17px]">
                Installment & Personal Loan Providers
              </h3>
              <p className="text-[16px] text-gray-600 mt-1">
                Verify ability-to-repay with real-time borrower data. Identify
                hidden liabilities before onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhoisAcuViewBuiltFor;
