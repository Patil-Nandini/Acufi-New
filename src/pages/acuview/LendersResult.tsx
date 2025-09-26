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
 icon: "/Reduction.png",
 bg: "/RectangleBg.webp",
 gradient: "linear-gradient(to bottom, white 30%, #FFE8E8 70%)",
 tabletGradient: "linear-gradient(to bottom, white 30%, #FFE8E8 70%)",
},
{
 title: "Industry-Wide Visibility",
 desc: "See your customer borrowing pattern with other Lenders",
 icon: "/Industry-Wide-Visibility.png",
 bg: "/RectangleBg.webp",
 gradient: "linear-gradient(to bottom, white 30%, #FEF4DC 70%)",
 tabletGradient: "linear-gradient(to bottom, white 30%, #FEF4DC 70%)",
},
{
 title: "99% Faster",
 desc: "Customer verification",
 icon: "/Faster.png",
 bg: "/RectangleBg.webp",
 gradient: "linear-gradient(to bottom, white 30%, #E5E5FF 70%)",
 tabletGradient: "linear-gradient(to bottom, white 30%, #E5E5FF 70%)",
},
{
 title: "Privacy-Focused Design",
 desc: "You stay anonymous, and your portfolio stays protected",
 icon: "/Privacy-focused-Design.png",
 bg: "/RectangleBg.webp",
 gradient: "linear-gradient(to bottom, white 30%, #CBEDF9 70%)",
 tabletGradient: "linear-gradient(to bottom, white 30%, #CBEDF9 70%)",
},
{
 title: "1 < second Processing",
 desc: "Lightning-fast and unbreakable",
 icon: "/ProcessignICon.png",
 bg: "/RectangleBg.webp",
 gradient: "linear-gradient(to bottom, white 30%, #CDF9EE 70%)",
 tabletGradient: "linear-gradient(to bottom, white 30%, #CDF9EE 70%)",
},
{
 title: "Lender Network Effect",
 desc: "Grow stronger every day with each new lender",
 icon: "/LenderNetworkEffect.png",
 bg: "/RectangleBg.webp",
 gradient: "linear-gradient(to bottom, white 30%, #FFE6E6 70%)",
 tabletGradient: "linear-gradient(to bottom, white 30%, #FFE6E6 70%)",
},
];

const LendersResult: React.FC = () => {
return (
 <section className="w-full font-sarabun bg-[url('/Indroducing-Section-bg.png')] bg-norepeat pt-8 pb-28">
   <div className="max-w-7xl mx-auto px-6">
     <div className="text-center">
       <h2 className="text-[34px] sm:text-[36px] font-extrabold text-[#07102A] leading-tight">
         Lender Results That Speak Volumes
       </h2>
       <p className="mt-4 text-gray-600 text-[17px]">
         Real numbers from lenders using <span className="font-semibold">AcuView</span>
       </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
       {cards.map((c, idx) => (
         <div key={idx} className="bg-white rounded-[40px] shadow-[0_6px_12px_rgba(0,0,0,0.12)] p-1.5 md:bg-transparent md:rounded-none md:shadow-none md:p-0 lg:bg-white lg:rounded-[40px] lg:shadow-[0_6px_12px_rgba(0,0,0,0.12)] lg:p-1.5">
           <article
             className="relative rounded-[36px] shadow-none md:shadow-[0_10px_20px_rgba(12,18,39,0.08)] lg:shadow-none overflow-hidden bg-white min-h-[320px] md:min-h-[380px] lg:min-h-[320px] md:max-w-[320px] lg:max-w-none md:mx-auto lg:mx-0 flex flex-col justify-between p-8"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.3)), url('${c.bg}'), ${typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024 ? c.tabletGradient : c.gradient}`,
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               backgroundSize: "cover",
             }}
           >
             <div className="z-10">
               <h3 className="text-[20px] md:text-[16px] lg:text-[20px] font-bold text-[#28123b]">{c.title}</h3>
               <p className="mt-3 text-[15px] md:text-[13px] lg:text-[15px] text-[#252529] max-w-[80%]">{c.desc}</p>
             </div>

             <div className="relative mt-6 flex items-end justify-center">
               <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center">
                 <Image src={c.icon} width={128} height={128} alt={c.title} />
               </div>
             </div>
           </article>
         </div>
       ))}
     </div>
   </div>
 </section>
);
};

export default LendersResult;