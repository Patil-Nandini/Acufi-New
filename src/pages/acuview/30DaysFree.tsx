"use client"
import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
const ThirtyDaysFree: React.FC = () => {
   const router = useRouter();
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 font-sarabun bg-[url('/Indroducing-Section-bg.png')] flex flex-col justtify-center items-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading and subtitle */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[40px] font-bold text-black mb-6">
            30 Days FREE
          </h1>
          <p className="text-[18px] text-[#0F1720] mx-auto">
            We&apos;re so confident <span className="font-semibold">AcuView</span>{" "}
            will transform your lending that we&apos;re <br/>giving you{" "}
            <span className="font-semibold">30 days</span> completely{" "}
            <span className="font-semibold">FREE</span>.
          </p>
        </div>

        {/* Icon and section title */}
        <div className="flex flex-col items-start sm:items-center mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/30-days-icon.png"
                alt="30 Days Icon"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-[28px] font-bold text-black text-center w-[90%]">
           Your 30-Day Risk-Free Trial Includes
            </h2>
          </div>
        </div>

        {/* Desktop grid with 5 cards */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mb-16 justify-items-center">
          <Card
            icon="/lifetime-founding-icon.png"
            alt="Lifetime Founding Members"
            title="Lifetime Founding"
            subtitle="Members Pricing"
          />
          <Card
            icon="/direct-input-icon.png"
            alt="Direct Input"
            title="Direct Input On"
            subtitle="Product Development"
          />
          <Card
            icon="/no-contracts-icon.png"
            alt="No Long-Term Contracts"
            title="No Long-Term"
            subtitle="Contracts"
          />
          <Card
            icon="/implementation-icon.png"
            alt="Full Implementation"
            title="Full Implementation"
            subtitle="Support Included"
          />
          <Card
            icon="/customer-success-icon.png"
            alt="Customer Success Manager"
            title="Dedicated Customer"
            subtitle="Success Manager"
          />
        </div>

        {/* Tablet grid with first 3 cards */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-6 justify-items-center mb-6">
          <Card
            icon="/lifetime-founding-icon.png"
            alt="Lifetime Founding Members"
            title="Lifetime Founding"
            subtitle="Members Pricing"
          />
          <Card
            icon="/direct-input-icon.png"
            alt="Direct Input"
            title="Direct Input On"
            subtitle="Product Development"
          />
          <Card
            icon="/no-contracts-icon.png"
            alt="No Long-Term Contracts"
            title="No Long-Term"
            subtitle="Contracts"
          />
        </div>

        {/* Tablet layout: last 2 cards centered in a row */}
        <div className="hidden sm:flex lg:hidden gap-6 mb-16 justify-center items-stretch flex-wrap">
          <div className="w-full max-w-[240px] h-[160px]">
            <Card
              icon="/implementation-icon.png"
              alt="Full Implementation"
              title="Full Implementation"
              subtitle="Support Included"
            />
          </div>
          <div className="w-full max-w-[240px] h-[160px]">
            <Card
              icon="/customer-success-icon.png"
              alt="Customer Success Manager"
              title="Dedicated Customer"
              subtitle="Success Manager"
            />
          </div>
        </div>

        {/* Mobile layout: 2 rows with 2 cards and 1 centered below */}
        <div className="sm:hidden grid grid-cols-2 gap-6 justify-items-center mb-6">
          <Card
            icon="/lifetime-founding-icon.png"
            alt="Lifetime Founding Members"
            title="Lifetime Founding"
            subtitle="Members Pricing"
          />
          <Card
            icon="/direct-input-icon.png"
            alt="Direct Input"
            title="Direct Input On"
            subtitle="Product Development"
          />
          <Card
            icon="/no-contracts-icon.png"
            alt="No Long-Term Contracts"
            title="No Long-Term"
            subtitle="Contracts"
          />
          <Card
            icon="/implementation-icon.png"
            alt="Full Implementation"
            title="Full Implementation"
            subtitle="Support Included"
          />
        </div>

        {/* Mobile layout: last card centered */}
        <div className="sm:hidden flex justify-center mb-16">
          <Card
            icon="/customer-success-icon.png"
            alt="Customer Success Manager"
            title="Dedicated Customer"
            subtitle="Success Manager"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] pt-10">
        <div className="bg-black text-white flex justify-center items-center rounded-[40px] py-3 px-10 mb-16 text-sm sm:text-base max-w-5xl">
          <span className="font-semibold flex items-center justify-center gap-2">
            <Image
              src="/affiliate-marketing.svg"
              alt="Rocket Icon"
              width={20}
              height={20}
            />
            Your participation doesn&apos;t just help your business, it helps
            build the infrastructure that will protect the entire industry.
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Building the Future of Lending Intelligence
          </h2>
          <p className="text-[18px] text-[#0F1720] max-w-3xl mx-auto">
            <span className="font-semibold">AcuFi</span> created{" "}
            <span className="font-semibold">AcuView</span> to solve the
            industry&apos;s biggest blind spot, real-time borrower activity
            across all lenders.
          </p>
        </div>

        <div className="bg-white border border-[#BDBDBD] rounded-[30px] p-8 max-w-3xl mx-auto mb-12 shadow-[0px_2px_2px_0px_#00000026]">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/OurVision.svg"
                  alt="Vision Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F1720]">
                Our vision
              </h3>
            </div>

            <p className="text-[#504E4E] text-[18px] w-[90%]">
              A world where lenders make decisions based on real-time
              intelligence, not outdated credit reports.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[18px] text-[#0F1720] mb-6">
            And become a founding member of the world&apos;s first real-time lending
            network.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F1720] mb-6">
            Join the Revolution!
          </h3>
          <div className="w-[100%] flex justify-center items0-center">
          <button
            type="button"
            className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[290px] px-7"
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
            />
            <span className="ml-2 whitespace-nowrap">Start Your FREE 30-Day Trial!</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtyDaysFree;

interface CardProps {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, alt, title, subtitle }) => (
  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-full h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 mb-4 relative flex-shrink-0">
      <Image src={icon} alt={alt} fill className="object-contain" />
    </div>
    <h3 className="text-[16px] font-semibold text-[#17012C] leading-tight">
      {title}
      <br />
      {subtitle}
    </h3>
  </div>
);
