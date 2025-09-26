

"use client";
import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
export default function FlexibleIntegrationOptions() {
   const router = useRouter();
   
  return (
    <>
      <style jsx>{`
        @media (min-width: 1100px) {
          .laptop-bg-image {
            background-image: url("/FlexibleIntegrationOptionsBg.webp");
            background-repeat: no-repeat;
            background-size: cover;
          }
          .laptop-flex-row {
            flex-direction: row;
          }
          .laptop-items-start {
            align-items: flex-start;
          }
          .laptop-justify-between {
            justify-content: space-between;
          }
          .laptop-text-left {
            text-align: left;
          }
          .laptop-basis-30 {
            flex-basis: 30%;
          }
          .laptop-basis-75 {
            flex-basis: 75%;
          }
          .laptop-py-24 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .laptop-flex {
            display: flex !important;
          }
          .laptop-hidden {
            display: none !important;
          }
          .laptop-grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .laptop-gap-8 {
            gap: 2rem;
          }
          .laptop-ml-0 {
            margin-left: 0;
          }
          .laptop-max-w-185 {
            max-width: 185px;
          }
        }
        @media (max-width: 1099px) {
          .below-laptop-hidden {
            display: none;
          }
        }
      `}</style>
      <section className="w-[100%] flex items-center justify-center bg-gradient-to-b from-[#c2e8ff]/50 to-[#FFFFFF] laptop-bg-image relative overflow-hidden pt-4 md:pt-0 mt-[70px] md:mt-0">
        {/* Mobile Header Background */}
        <div
          className="absolute top-0 left-0 right-0 h-auto block md:hidden bg-[url('/FlexibleIntegrationOptionsBg-Mobile.webp')] bg-no-repeat z-0"
          style={{
            width: "calc(100% + 50px)",
            marginLeft: "-50px",
            height: "55%",
            backgroundSize: "120% 100%",
          }}
        ></div>

        {/* Tablet  */}
        <div
          className="absolute top-0 left-0 right-0 h-auto hidden md:block laptop-hidden bg-[url('/FlexibleIntegrationOptionsBg-Mobile.webp')] bg-no-repeat bg-cover z-0"
          style={{
            width: "calc(100% + 40px)",
            marginLeft: "-20px",
            height: "60%",
          }}
        ></div>

        <div className="w-[95%] flex flex-col laptop-flex-row items-center laptop-justify-between justify-center px-4 py-6 md:py-6 laptop-py-24 gap-10 relative z-10">
          {/* Header Section */}
          <div className="laptop-basis-30 flex flex-col laptop-items-start items-center justify-center laptop-text-left text-center">
            <h2 className="text-[40px] font-bold text-[#0F1720]">
              Flexible Integration
              <br />
              Options
            </h2>
            <p className="text-[18px] text-[#0F1720] mb-3">
              Choose the access method that works best for you!
            </p>
            <button
              type="button"
              className="hidden laptop-flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7  ml-[-7px]"
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
              <span className="ml-2 whitespace-nowrap"> Get Your Demo!</span>
            </button>
          </div>

          {/* Cards Section */}
          <div className="w-full laptop-basis-75 flex flex-col gap-8">
            {/* Card 1 */}
            <div
              className="relative rounded-[60px] p-8 md:p-10 bg-no-repeat bg-cover w-full bg-center md:bg-top"
              style={{ backgroundImage: "url('/FlexibleCardsBg.webp')" }}
            >
              <div className="flex items-center justify-center md:justify-center gap-3 mb-2 ml-5 md:ml-0">
                <Image
                  src="/APIIntegration.svg"
                  alt="API Integration Icon"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <span className="text-xl font-bold text-gray-900 flex justify-center items-center">
                  API Integration
                </span>
              </div>
              <p className="text-[#504E4E] mb-6 text-center">
                Seamlessly integrate AcuView&apos;s real-time intelligence
                directly into your existing LMS/LOS software with our robust
                API.
              </p>
              <div className="flex justify-center gap-4 laptop-ml-0 md:ml-12 md:grid  md:grid-cols-2 lg:grid-cols-4 md:flex-nowrap flex-wrap">
                <FeatureCard text="RESTful API with comprehensive documentation" />
                <FeatureCard text="Real-time responses" />
                <FeatureCard text="Easy integration with popular LMS platforms" />
                <FeatureCard text="Webhook support for instant notifications" />
              </div>
            </div>
            {/* Card 2 */}
            <div
              className={`
    relative rounded-[60px] p-8 md:p-10
    bg-no-repeat bg-cover
    w-full bg-center md:bg-top
  `}
              style={{ backgroundImage: "url('/FlexibleCardsBg.webp')" }}
            >
              <div className="flex items-center justify-center md:justify-center gap-3 mb-2 ml-4 md:ml-0">
                <Image
                  src="/WebPortal.svg"
                  alt="API Integration Icon"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <span className="text-xl font-bold text-gray-900">
                  Web Portal
                </span>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Access AcuView&apos;s intelligence through our intuitive web
                portal for manual checks and detailed analysis.
              </p>
              <div className="flex justify-center gap-4 laptop-ml-0 md:ml-12 md:grid md:grid-cols-3 md:flex-nowrap flex-wrap">
                <FeatureCard text="User-friendly dashboard with instant insights" />
                <FeatureCard text="Manual borrower verification tools" />
                <FeatureCard text="Detailed reporting and analytics" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div
      className="
      flex flex-col items-start justify-start
      bg-white rounded-[30px] shadow-[0px_10px_30px_0px_#D1DCE266]
      py-6 px-4
      h-[160px] lg:h-[200px] xl:h-[160px]
      w-full
      max-w-[168px]
      md:max-w-[200px] md:min-h-[110px] md:py-8 md:px-6
      laptop:max-w-[240px] laptop:min-h-[130px] laptop:py-10 laptop:px-8
      mx-auto
      transition duration-300 ease-in-out
      hover:scale-120
    "
    >
      <span className="mb-2">
        <Image src="/CircleGreen.svg" alt="" width={32} height={32} loading="lazy" />
      </span>
      <span className="text-left text-base text-gray-800 font-medium">
        {text}
      </span>
    </div>
  );
}
