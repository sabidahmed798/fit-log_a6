// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";

// import { useLibrary } from "@/contex/LibraryContex";
// import { ILibrary } from "@/Types/library.type";

// interface TodayplanButtonProps {
//   library: ILibrary;
// }

// const TodayplanButton = ({ library }: TodayplanButtonProps) => {
//   const router = useRouter();

//   const { todayPlan, setTodayPlan, showToast } = useLibrary();

//   const handleAddToPlan = () => {
//     const alreadyAdded = todayPlan.some(
//       (item) => String(item.id) === String(library.id),
//     );

//     if (alreadyAdded) {
//       showToast("Already in today's plan");
//       router.push("/my-plan");
//       return;
//     }

//     if (todayPlan.length >= 5) {
//       showToast("You can add maximum 5 workouts");
//       return;
//     }

//     setTodayPlan((prev) => [...prev, library]);

//     showToast("Added to today's plan");

//     router.push("/my-plan");
//   };

//   return (
//     <button
//       type="button"
//       onClick={handleAddToPlan}
//       className="flex items-center gap-1.5 rounded-md bg-[#b7ff00] px-4 py-2 text-[8px] font-black uppercase text-black transition hover:bg-[#c8ff33] sm:px-5 sm:py-2.5 sm:text-[9px]"
//     >
//       <span>＋</span>
//       Add to today's plan
//     </button>
//   );
// };

// export default TodayplanButton;

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
