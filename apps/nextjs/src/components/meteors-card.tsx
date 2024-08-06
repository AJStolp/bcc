import Link from "next/link";

import { Meteors } from "@saasfly/ui/meteors";

import { HeroProps } from "~/types/interfaces";

export function Meteorss({ heroData }: { heroData: HeroProps[] }) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 px-4 py-8 shadow-xl dark:bg-gray-900 dark:bg-opacity-70">
          <h1 className="relative z-50 mb-4 text-2xl font-bold">
            {heroData[1]?.title || "Unleashing Creativityyyyyyy"}
          </h1>

          <p className="light:text-slate-600 relative z-50 mb-4 text-base font-normal dark:text-slate-400">
            {heroData[1]?.content ||
              "We're excited to help you build amazing websites and creative solutions. Let's create something great together."}
          </p>

          <Link
            href={heroData[1]?.url || "/contact"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="light:text-gray-400 rounded-lg border border-gray-500 px-4 py-1 dark:text-gray-300">
              {heroData[1]?.cta || "Chat with us"}
            </button>
          </Link>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
