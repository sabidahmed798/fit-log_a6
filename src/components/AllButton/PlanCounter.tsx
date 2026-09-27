"use client";

import { useRouter } from "next/navigation";
import React from "react";

const PlanCounter = () => {
  const router = useRouter();

  const handlePcount = () => {
    console.log("Count Button tigger");
    router.push("/my-plan");
  };

  return (
    <div className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2">
      <button
        type="button"
        className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2 cursor-pointer"
        onClick={() => handlePcount()}
      >
        <div>Plan</div>

        <div className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#C2F800] px-1 text-[9px] font-bold text-black">
          0
        </div>
      </button>
    </div>
  );
};

export default PlanCounter;
