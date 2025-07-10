'use client';

import React from 'react';
import Image from 'next/image';
import {
  UserCheck,
  TrendingUp,
  DollarSign,
  LineChart,
} from 'lucide-react';

import Account1 from "@/public/image/account-1.svg";
import Dollar from "@/public/image/money.svg";
import Trending from "@/public/image/start-trading.svg";
// import Account1 from "@/public/image/account.svg";


import { sofia400 } from "@/app/fonts";

const featuresLeft = [
  {
    icon: Account1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: Dollar,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const featuresRight = [
  {
    icon: Trending,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: Account1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export default function Features() {
  return (
    <section className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-center text-[50px]  text-black mb-16 ${sofia400.className}`}>
          QUISQUE RUTRUM
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
          {/* Left features */}
          <div className="flex flex-col gap-16">
            {featuresLeft.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start text-start">
                <Image src={feature.icon} alt="Feature Icon" width={100} height={100} className="mb-4" />

                {/* <feature.icon className="w-12 h-12 text-red-500 mb-4" /> */}
                <p className="text-sm text-gray-800 max-w-[160px]">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center items-center">
            <Image
              src="/image/phone-back-front.svg"
              alt="Phone 1"
              width={630}
              height={630}
              className="max-w-full h-auto"
              // className="absolute left-0 z-10"
            />
            {/* <Image
              src="/image/phone-back-front.svg"
              alt="Phone 2"
              width={220}
              height={500}
              className="relative left-16"
            /> */}
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-16">
            {featuresRight.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start text-start">
                <Image src={feature.icon} alt="Feature Icon" width={100} height={100} className="mb-4" />

                {/* <feature.icon className="w-12 h-12 text-red-500 mb-4" /> */}
                <p className="text-sm text-gray-800 max-w-[160px]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

