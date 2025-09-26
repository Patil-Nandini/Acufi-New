"use client";
import Image from "next/image";
import { useState } from "react";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
const faqs = [
  {
    question: "Is my customer data safe?",
    answer:
      "Yes. AcuView cleans all lender-identifying info. Your customers stay yours. We use advanced encryption to ensure complete data security.",
  },
  {
    question: "How fast is the data updated?",
    answer:
      "Milliseconds. 3ms to be exact. AcuView always live with real-time updates from our lender network, giving you the most current information available. ",
  },
  {
    question: "Do you support storefront and online lenders?",
    answer:
      "Yes—AcuView is built for both environments with dedicated workflows and APIs. Our platform seamlessly integrates with both physical store systems and online lending platforms.   ",
  },
  {
    question: "Do you offer integration support?",
    answer:
      "Absolutely. We provide sandbox environments, comprehensive API documentation, and a dedicated customer success manager to ensure smooth integration.",
  },
  {
    question: "How long does it take to go live with AcuView?",
    answer:
      "Store lenders can be live in 30 minutes or less. API integrations are simple and easy — we offer a sandbox for testing.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);
 const router = useRouter();
 
  return (
    <section className="relative w-full bg-[#F8F8FC] overflow-hidden font-sarabun px-4 sm:px-6 lg:px-8 py-12 lg:pb-50 pb-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#0F1720] mt-[30px] md:mt-[1px]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 mt-[60px]">
        <div className="w-full lg:w-[60%] mt-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-[14px] shadow transition-all `}
              >
                <button
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 focus:outline-[#F1F2F9]"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-[#0F1720] text-left">
                    {faq.question}
                  </span>
                  {open === i ? (
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        background:
                          "linear-gradient(193.06deg, #108FDB 5.92%, #0862B5 89.21%)",
                        boxShadow: `
                    0px 2px 6px 0px #4A3AFF1A,
                    0px 1px 1.5px 0px #FFFFFF40 inset,
                    0px -1px 1px 0px #0000001F inset
                  `,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 10.5L12 14.5L16 10.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        background: "#E5E8EF",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10.5 8L14.5 12L10.5 16"
                          stroke="#181F2C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
                {faq.answer && open === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#0F1720] text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col items-center justify-start">
          <object
            type="image/svg+xml"
            data="/Acuview-faq.svg"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[80%] mb-6"
            aria-label="AcuFi FAQ illustration"
          >
            AcuFi FAQ illustration
          </object>
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <div className="font-bold text-[#181F2C] mb-1 text-base sm:text-lg">
              Still, have questions?
            </div>
            <div className="text-[#181F2C] mb-4 text-xs sm:text-sm md:text-base">
              Can&apos;t find the answer you&apos;re looking for?
            </div>
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
              />
              <span className="ml-2 whitespace-nowrap">Get Your Demo!</span>
            </button>
          </div>
        </div>
      </div>

      <Image
        src="/faq-setting.webp"
        alt="FAQ Gear"
        width={140}
        height={140}
        className="absolute left-0 top-6 w-[60px] sm:w-[80px] md:w-[120px] lg:w-[140px] opacity-80 pointer-events-none select-none"
        draggable={false}
      />
    </section>
  );
}
