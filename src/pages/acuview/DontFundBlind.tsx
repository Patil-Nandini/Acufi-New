
"use client";
import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
const DontFundBlind = () => {
   const router = useRouter();
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-8 py-16"
      style={{
        backgroundColor: "#0B2D58",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(7, 93, 178, 0.2) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-[1400px] w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Don&apos;t Lend Blind, Lend Smart.
          </h1>

          <div className="max-w-3xl mx-auto space-y-1">
            <p className="text-lg md:text-xl text-white/90 font-light">
              <span className="font-medium">AcuView</span> reveals what credit
              reports and other data companies can&apos;t, giving you
            </p>
            <p className="text-lg md:text-xl text-white/90 font-light">
              complete borrower intelligence before you say{" "}
              <span className="font-medium">&apos;YES&apos;</span>.
            </p>
            <p className="text-lg md:text-xl text-white/90 font-light pt-1">
              Turn your biggest risks to your advantage.
            </p>
            <div className="flex items-center justify-center w-full]">
              <button
                type="button"
                className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7 mt-5 ml-[-7px]"
                style={{
                  backgroundImage: "url('/watchNowButtonBg.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  paddingBottom: "25px",
                }}
                aria-label="Contact Sales!"
                onClick={() => router.push("/under-renovation")}
              >
                <Image
                  src="/ContactSalesIcon.png"
                  alt="Contact"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span className="ml-2 whitespace-nowrap"> Contact Sales!</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-center items-center lg:items-start relative gap-8 ">
            {/* Card 1 */}
            <div className="w-full max-w-[380px] md:w-[calc(33.333%-1rem)] md:max-w-[300px] lg:max-w-[380px] relative order-1 md:h-[571px] lg:h-[500] flex flex-col">
              <div
                className="relative rounded-[26px] p-[1.5px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, #B6B6B6 0%, #B6B6B6 30%, #0B2D58 100%)",
                }}
              >
                <div
                  className="rounded-[25px] p-1 h-full relative"
                  style={{
                    backgroundColor: "#0B2D58",
                    backgroundImage:
                      "linear-gradient(180deg, #075DB2 0%, #0B2D58 100%)",
                    backdropFilter: "blur(20px)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="relative rounded-[20px] p-[1.5px] h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #B6B6B6 0%, #B6B6B6 30%, #0B2D58 100%)",
                    }}
                  >
                    <div
                      className="rounded-[19px] px-7 py-10 h-full relative overflow-hidden flex flex-col"
                      style={{
                        background:
                          "linear-gradient(180deg, #075DB2 0%, #0B2D58 100%)",
                        boxShadow:
                          "inset 0 2px 4px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.3)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background:
                            "radial-gradient(ellipse at top, rgba(79, 195, 247, 0.3) 0%, transparent 60%)",
                        }}
                      ></div>
                      <div className="relative flex justify-center mb-10">
                        <div className="w-55 h-55 md:w-30 md:h-30 lg:w-40 lg:h-40 xl:w-55 xl:h-55 relative">
                          <Image
                            src="/seewhatshappeningnow.png"
                            alt="Real-time tracking"
                            fill
                            className="object-contain drop-shadow-2xl"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h3 className="relative text-[22px] font-semibold text-white text-center md:mb-8 leading-tight">
                        See What&apos;s Happening Right Now
                      </h3>
                      <div className="relative flex justify-center mt-[2px]">
                        <div
                          className="rounded-[16px] p-[1.7px] inline-block"
                          style={{
                            background:
                              "linear-gradient(5.07deg, #084A9D -51.69%, #0C3260 -1.2%)",
                          }}
                        >
                          <div
                            className="rounded-[15px] px-5 py-4"
                            style={{
                              background:
                                "linear-gradient(180.7deg, #0B2D58 0.6%, #0C305E 103.06%)",
                            }}
                          >
                            <p className="text-white/75 text-center text-[13px] leading-relaxed py-2">
                              Track loan applications across multiple
                              <br />
                              lenders in real time, not weeks later when
                              it&apos;s
                              <br />
                              too late.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full max-w-[380px] md:w-[calc(33.333%-1rem)] md:max-w-[300px] lg:max-w-[380px] relative order-2 md:h-[500px] flex flex-col md:mt-[60px] justify-end">
              <div
                className="relative rounded-[26px] p-[1.5px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, #B6B6B6 0%, #B6B6B6 30%, #0B2D58 100%)",
                }}
              >
                <div
                  className="rounded-[25px] p-1 h-full relative"
                  style={{
                    backgroundColor: "#0B2D58",
                    backgroundImage:
                      "linear-gradient(180deg, #075DB2 0%, #0B2D58 100%)",
                    backdropFilter: "blur(20px)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="relative rounded-[20px] p-[1.5px] h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #B6B6B6 0%, #B6B6B6 30%, #0B2D58 100%)",
                    }}
                  >
                    <div
                      className="rounded-[19px] px-7 py-10 h-full relative overflow-hidden flex flex-col"
                      style={{
                        background:
                          "linear-gradient(180deg, #075DB2 0%, #0B2D58 100%)",
                        boxShadow:
                          "inset 0 2px 4px rgba(0,0,0,0.1), 0 25px 50px rgba(0,0,0,0.35)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{
                          background:
                            "radial-gradient(ellipse at top, rgba(79, 195, 247, 0.35) 0%, transparent 60%)",
                        }}
                      ></div>
                      <div className="relative flex justify-center mb-10">
                        <div className="w-55 h-55  md:w-30 md:h-30 lg:w-40 lg:h-40 xl:w-55 xl:h-55 relative">
                          <Image
                            src="/verifyidentity.png"
                            alt="Verify Identity"
                            fill
                            className="object-contain drop-shadow-2xl"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h3 className="relative text-[22px] font-semibold text-white text-center md:mb-8">
                        Verify Identity
                      </h3>
                      <div className="relative flex justify-center mt-[30px]">
                        <div
                          className="rounded-[16px] p-[1.7px] inline-block"
                       style={{
                            background:
                              "linear-gradient(5.07deg, #084A9D -51.69%, #0C3260 -1.2%)",
                          }}
                        >
                          <div
                            className="rounded-[15px] px-5 py-4"
                          style={{
                              background:
                                "linear-gradient(180.7deg, #0B2D58 0.6%, #0C305E 103.06%)",
                            }}
                          >
                            <p className="text-white/75 text-center text-[13px] leading-relaxed py-3">
                              Check banking details, identity, and
                              <br />
                              borrowing patterns in under 30 seconds.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full max-w-[380px] md:w-[calc(33.333%-1rem)] md:max-w-[300px] lg:max-w-[380px] relative order-3 md:h-[571px] lg:h-[500px] flex flex-col">
              <div
                className="relative rounded-[26px] p-[1.5px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, #B6B6B6 0%, #B6B6B6 30%, #0B2D58 100%)",
                }}
              >
                <div
                  className="rounded-[25px] p-1 h-full relative"
                  style={{
                    backgroundColor: "#0B2D58",
                    backgroundImage:
                      "linear-gradient(180deg, #075DB2 0%, #0B2D58 100%)",
                    backdropFilter: "blur(20px)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="relative rounded-[20px] p-[1.5px] h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #B6B6B6 0%, #B6B6B6 30%, #0B2D58 100%)",
                    }}
                  >
                    <div
                      className="rounded-[19px] px-7 py-10 h-full relative overflow-hidden flex flex-col"
                      style={{
                        background:
                          "linear-gradient(180deg, #075DB2 0%, #0B2D58 100%)",
                        boxShadow:
                          "inset 0 2px 4px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.3)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background:
                            "radial-gradient(ellipse at top, rgba(79, 195, 247, 0.3) 0%, transparent 60%)",
                        }}
                      ></div>
                      <div className="relative flex justify-center mb-10">
                        <div className="w-55 h-55 md:w-30 md:h-30 lg:w-40 lg:h-40 xl:w-55 xl:h-55 relative">
                          <Image
                            src="/lendernetworkintelligence.png"
                            alt="Lender Network"
                            fill
                            className="object-contain drop-shadow-2xl"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h3 className="relative text-[22px] font-semibold text-white text-center md:mb-8 leading-tight">
                        Lender Network Intelligence
                      </h3>
                      <div className="relative flex justify-center mt-[35px]">
                        <div
                          className="rounded-[16px] p-[1.7px] inline-block"
                        style={{
                            background:
                              "linear-gradient(5.07deg, #084A9D -51.69%, #0C3260 -1.2%)",
                          }}
                        >
                          <div
                            className="rounded-[15px] px-5 py-4"
                            style={{
                              background:
                                "linear-gradient(180.7deg, #0B2D58 0.6%, #0C305E 103.06%)",
                            }}
                          >
                            <p className="text-white/75 text-center text-[13px] leading-relaxed py-2">
                              Leverage insights from 1M+ borrower data
                              <br />
                              points across our growing lender network.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default DontFundBlind;
