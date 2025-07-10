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
    month: "January",
    name: "JOHN SMITH",
    phone: "5678987654",
    gain: "16344%",
    trophy: Trophy1,
  },
  {
    rank: 2,
    month: "January",
    name: "JOHN SMITH",
    phone: "5678987654",
    gain: "16344%",
    trophy: Trophy2,
  },
  {
    rank: 3,
    month: "January",
    name: "JOHN SMITH",
    phone: "5678987654",
    gain: "16344%",
    trophy: Trophy3,
  },
];

export default function Leaderboard() {
  const [gains, setGains] = useState<string[]>([]);

  //   useEffect(() => {
  //     const generated = Array.from({ length: 10 }).map(() =>
  //       (Math.random() * 1600 + 60).toFixed(2)
  //     );
  //     setGains(generated);
  //   }, []);

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map(() =>
      parseFloat((Math.random() * 1600 + 60).toFixed(2))
    );

    // Sort in descending order
    const sorted = generated.sort((a, b) => b - a).map((n) => n.toFixed(2));
    setGains(sorted);
  }, []);

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
                className="relative bg-white p-6 rounded-xl flex gap-6 items-center shadow-md"
              >
                {/* Sash Ribbon */}
                <div className="absolute top-0 right-0">
                  <div
                    className="text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-5 -translate-y-2 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%)",
                    }}
                  >
                    $1000
                  </div>
                </div>

                {/* Trophy */}
                <Image
                  src={winner.trophy}
                  alt={`Trophy ${winner.rank}`}
                  width={48}
                  height={48}
                />

                {/* Info */}
                <div>
                  <p className="text-[#C79F43] font-semibold text-sm">
                    {winner.month} {winner.rank}
                    {winner.rank === 1
                      ? "st"
                      : winner.rank === 2
                      ? "nd"
                      : winner.rank === 3
                      ? "rd"
                      : "th"}{" "}
                    WINNER
                  </p>
                  <p className="font-semibold text-black text-sm">
                    {winner.name}
                  </p>
                  <p className="text-xs text-gray-500">{winner.phone}</p>
                  <p className="text-xs font-semibold mt-2">
                    TOTAL GAIN OF{" "}
                    <span className="text-red-600">{winner.gain}</span>
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
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2">John Smith</td>
                    <td className="py-2 text-right">
                      {/* {(Math.random() * 1600 + 60).toFixed(2)}% */}
                      {gains[i]}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-400 text-xs mt-4">
              Nam quam nunc, blandit vel, luctus pulvinar
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="w-[300px] text-white text-lg bg-[#179149] hover:bg-green-700 rounded-sm">
            JOIN NOW
          </Button>
          <p className="text-xs text-gray-400 mt-2">
            Terms and Conditions apply
          </p>
        </div>
      </div>
    </section>
  );
}
