import React from "react";
import Image from "next/image";
import logos from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#1c1d22] bg-[#0C0D10]">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex min-h-[58px] items-center justify-between gap-3">
          {/* Logo + FITLOG */}
          <div className="flex shrink-0 items-center gap-2">
            <Image
              src={logos}
              alt="FITLOG Logo"
              width={20}
              height={20}
              className="h-[38px] w-[38px] object-contain"
            />

            <h2 className="text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
              FITLOG
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <div className="rounded-full bg-[#1A2312] px-3 py-[6px] text-[10px] font-medium text-[#C2F800] sm:px-4">
              Workouts
            </div>

            <div className="px-3 py-[6px] text-[10px] text-[#85858a] sm:px-4">
              My Plan
            </div>
          </div>

          {/* Counters */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            {/* Plan */}
            <div className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2">
              <span>Plan</span>

              <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#C2F800] px-1 text-[9px] font-bold text-black">
                0
              </span>
            </div>

            {/* Saved */}
            <div className="flex items-center gap-1.5 text-[10px] text-[#85858a] sm:gap-2">
              <span>Saved</span>

              <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#292a30] px-1 text-[9px] text-[#2D313B]">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
