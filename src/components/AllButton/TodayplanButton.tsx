"use client";

import React from "react";

import { useRouter } from "next/navigation";

// import { useLibrary, ILibrary } from "@/context/LibraryContex";

import { useLibrary, ILibrary } from "@/contex/LibraryContex";

interface TodayplanButtonProps {
  library: ILibrary;
}

const TodayplanButton = ({ library }: TodayplanButtonProps) => {
  const router = useRouter();

  const { todayPlan, setTodayPlan } = useLibrary();

  const handleAddToPlan = () => {
    // Already added?

    const alreadyAdded = todayPlan.some(
      (item) => String(item.id) === String(library.id),
    );

    if (!alreadyAdded) {
      // Maximum 5 exercises

      if (todayPlan.length >= 5) {
        alert("You can add maximum 5 exercises to today's plan.");

        return;
      }

      setTodayPlan((prev: ILibrary) => [...prev, library]);
    }

    // Go to My Plan page

    router.push("/my-plan");
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className="rounded-md bg-[#b7ff00] px-4 py-2 text-[8px] font-black uppercase text-black transition hover:bg-[#c8ff33] sm:px-5 sm:py-2.5 sm:text-[9px]"
    >
      Add to today's plan
    </button>
  );
};

export default TodayplanButton;
