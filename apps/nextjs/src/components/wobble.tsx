"use client";

import React from "react";

import { WobbleCard } from "@saasfly/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-rose-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Stay Informed
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            We're always on top of the latest trends in web development and
            design. From new technologies to best practices, stay informed with
            Backcountry Creative and keep your digital presence ahead of the
            curve.
          </p>
        </div>
        {/* <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-4 -z-10 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
        /> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Our Approach
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Blending creativity with technology to craft exceptional digital
          experiences.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-teal-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance  text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Creative Solutions
          </h2>
          <p className="mt-4 max-w-[21rem] text-left  text-base/6 text-neutral-200">
            Enhance your brand with our tailored creative services. From
            designing eye-catching restaurant menus to capturing breathtaking
            drone footage, we ensure your brand stands out and is accessible to
            all. Let us help you create a lasting impression and elevate your
            digital presence.
          </p>
        </div>
        <img
          src="/images/radiant906-ss.webp"
          width={400}
          height={200}
          alt="linear demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[1%]"
        />
      </WobbleCard>
    </div>
  );
}
