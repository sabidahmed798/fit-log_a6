"use client";

import { useRouter } from "next/navigation";
import { useLibrary } from "@/contex/LibraryContex";

const PlanCounter = () => {
  const router = useRouter();
  const { todayPlan } = useLibrary();

  const planCount = todayPlan.length;

  const handlePcount = () => {
    console.log("Plan Counter clicked");
    router.push("/my-plan");
  };

  return (
    <div className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2"
        onClick={handlePcount}
      >
        <span>Plan</span>

        <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#C2F800] px-1 text-[9px] font-bold text-black">
          {planCount}
        </span>
      </button>
    </div>
  );
};

export default PlanCounter;
