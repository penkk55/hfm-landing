"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import Trophy1 from "@/public/image/trophy-1.svg";
import Trophy2 from "@/public/image/trophy-2.svg";
import Trophy3 from "@/public/image/trophy-3.svg";
import { Button } from "@/components/ui/button";

const winners = [
  {
    rank: 1,
    month: "JANUARY",
    name: "JOHN SMITH",
    phone: "5678987654",
    gain: "16344%",
    trophy: Trophy1,
  },
  {
    rank: 2,
    month: "JANUARY",
    name: "JOHN SMITH",
    phone: "5678987654",
    gain: "16344%",
    trophy: Trophy2,
  },
  {
    rank: 3,
    month: "JANUARY",
    name: "JOHN SMITH",
    phone: "5678987654",
    gain: "16344%",
    trophy: Trophy3,
  },
];

export default function Leaderboard() {
  const [gains, setGains] = useState<string[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map(() =>
      parseFloat((Math.random() * 1600 + 60).toFixed(2))
    );
    const sorted = generated.sort((a, b) => b - a).map((n) => n.toFixed(2));
    setGains(sorted);
  }, []);

  const getSuperscript = (rank: number) => {
    switch (rank) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[32px] md:text-[36px] font-semibold mb-10">
          SED FRINGILLA MAURIS SIT
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Winner Cards */}
          <div className="space-y-6">
            {winners.map((winner, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-2xl flex gap-6 items-center shadow-sm"
              >
                {/* Sash Ribbon */}
                <div className="absolute top-0 right-0 overflow-hidden w-[100px] h-[100px]">
                  <div
                    className="absolute top-[20px] right-[-40px] text-white text-xs font-bold px-10 py-1 rotate-45"
                    style={{
                      background:
                        "linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%)",
                      width: "140px",
                      textAlign: "center",
                    }}
                  >
                    $1000
                  </div>
                </div>

                {/* Trophy */}
                <Image
                  src={winner.trophy}
                  alt={`Trophy ${winner.rank}`}
                  width={60}
                  height={60}
                />

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <p className="text-[#C79F43] font-semibold text-sm leading-tight">
                    {winner.month} {winner.rank}
                    <sup>{getSuperscript(winner.rank)}</sup> WINNER
                  </p>
                  <p className="font-semibold text-black text-[15px] leading-tight">
                    {winner.name}
                  </p>
                  <p className="text-sm text-gray-400 leading-tight">
                    {winner.phone}
                  </p>
                  <p className="text-sm font-bold mt-2 leading-tight text-black">
                    TOTAL GAIN OF{" "}
                    <span className="text-red-600 font-bold">
                      {winner.gain}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div>
            <h3 className="font-bold text-black mb-4 text-xl">
              ALIQUAM LOREM ANT
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-black border-b border-gray-200">
                  <th className="pb-2">NAME</th>
                  <th className="pb-2 text-right text-red-500">GAIN</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {gains.map((gain, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2">John Smith</td>
                    <td className="py-2 text-right">{gain}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-400 text-xs mt-4">
              Nam quam nunc, blandit vel, luctus pulvinar
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#hero">
            <Button
              type="button"
              className="w-[300px] text-white text-lg bg-[#179149] hover:bg-green-700 rounded-sm"
            >
              JOIN NOW
            </Button>
          </a>
          <p className="text-gray-500 text-xs mt-2">
            Terms and Conditions apply
          </p>
        </div>
      </div>
    </section>
  );
}
