"use client";

import React from "react";
import Image from "next/image";
import Medal1 from "@/public/image/medal-1.svg";
import Medal2 from "@/public/image/medal-2.svg";
import Medal3 from "@/public/image/medal-3.svg";
import { sofia400 } from "@/app/fonts";

const prizes = [
  {
    medal: Medal1,
    amount: "$1000",
    description: "CRAS DAPIBUS &\nCRAS DAPIBUS",
  },
  {
    medal: Medal2,
    amount: "$1000",
    description: "CRAS DAPIBUS",
  },
  {
    medal: Medal3,
    amount: "$1000",
    description: "CRAS DAPIBUS",
  },
];

const Prizes = () => {
  return (
    <section className="pt-30 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-center text-[40px] font-semibold text-black mb-16 ${sofia400.className}`}>
          PRIZES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-xl p-8 text-center h-full flex flex-col items-center justify-between "
            >
              <Image
                src={prize.medal}
                alt={`Medal ${index + 1}`}
                width={64}
                height={64}
                className="mb-6"
              />
              <h3 className="text-3xl font-bold text-black mb-2">
                {prize.amount}
              </h3>
              <p className="text-sm text-black font-medium whitespace-pre-line">
                {prize.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#hero"
            className="inline-block bg-[#179149] hover:bg-green-700 text-white px-12 py-3 rounded-sm font-bold text-lg mb-2 transition-colors"
          >
            JOIN NOW
          </a>
          <p className="text-xs text-gray-500">Terms and Conditions apply</p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
