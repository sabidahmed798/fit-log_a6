// // "use client";

// // import React from "react";

// // import Image from "next/image";
// // import Link from "next/link";

// // import logos from "../../assets/logo.png";

// // import { useLibrary } from "@/contex/LibraryContex";

// // const Navbar = () => {
// //   const { todayPlan, save } = useLibrary();

// //   return (
// //     <nav className="w-full border-b border-[#1c1d22] bg-[#0C0D10]">
// //       <div className="container mx-auto px-4 sm:px-6">
// //         <div className="flex min-h-[80px] items-center justify-between gap-3">
// //           {/* LOGO */}
// //           <div className="flex shrink-0 items-center gap-2">
// //             <Image
// //               src={logos}
// //               alt="FITLOG Logo"
// //               width={38}
// //               height={38}
// //               className="h-[38px] w-[38px] object-contain"
// //             />

// //             <h2 className="text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
// //               FITLOG
// //             </h2>
// //           </div>

// //           {/* NAVIGATION */}
// //           <div className="flex items-center gap-1">
// //             <Link
// //               href="/"
// //               className="cursor-pointer rounded-full bg-[#1A2312] px-3 py-[6px] text-[10px] font-medium text-[#C2F800] sm:px-4"
// //             >
// //               Workouts
// //             </Link>

// //             <Link
// //               href="/my-plan"
// //               className="cursor-pointer px-3 py-[6px] text-[10px] text-[#85858a] sm:px-4"
// //             >
// //               My Plan
// //             </Link>
// //           </div>

// //           {/* COUNTERS */}
// //           <div className="flex shrink-0 items-center gap-2 sm:gap-5">
// //             {/* PLAN */}
// //             <Link
// //               href="/my-plan"
// //               className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2"
// //             >
// //               <span>Plan</span>

// //               <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#C2F800] px-1 text-[9px] font-bold text-black">
// //                 {todayPlan.length}
// //               </span>
// //             </Link>

// //             {/* SAVED */}
// //             <Link
// //               href="/my-plan"
// //               className="flex items-center gap-1.5 text-[10px] text-[#85858a] sm:gap-2"
// //             >
// //               <span>Saved</span>

// //               <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#292a30] px-1 text-[9px] text-gray-400">
// //                 {save.length}
// //               </span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React from "react";
// import LibraryCard from "@/components/shared/LibraryCard";
// import { ILibrary } from "@/Types/library.type";

// const getLibrary = async (): Promise<ILibrary[]> => {
//   try {
//     const response = await fetch(
//       "https://api.api-store.workers.dev/api/fitlog",
//       {
//         cache: "no-store",
//       },
//     );

//     if (!response.ok) {
//       console.error("API Error:", response.status, response.statusText);
//       return [];
//     }

//     const contentType = response.headers.get("content-type");

//     if (!contentType?.includes("application/json")) {
//       console.error("API did not return JSON");
//       return [];
//     }

//     const data = await response.json();

//     if (!Array.isArray(data)) {
//       console.error("Invalid API data:", data);
//       return [];
//     }

//     return data;
//   } catch (error) {
//     console.error("Failed to fetch library:", error);
//     return [];
//   }
// };

// const Library = async () => {
//   const libraryData = await getLibrary();

//   return (
//     <section id="library" className="container mx-auto px-4 py-16">
//       <div className="mb-10 text-center">
//         <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#b7ff00]">
//           Workout Library
//         </p>

//         <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
//           Explore Workouts
//         </h2>

//         <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
//           Choose your workout and build a better training routine.
//         </p>
//       </div>

//       {libraryData.length === 0 ? (
//         <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center">
//           <p className="text-gray-400">
//             Workout data could not be loaded right now.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {libraryData.map((library) => (
//             <LibraryCard key={library.id} library={library} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Library;

import React from "react";

import Image from "next/image";

import logos from "../../assets/logo.png";

import Link from "next/link";
import SaveButton from "../AllButton/SaveButton";
import SaveCounter from "../AllButton/SaveCounter";
import PlanCounter from "../AllButton/PlanCounter";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#1c1d22] bg-[#0C0D10]">
      <div className="container mx-auto  px-4 sm:px-6">
        <div className="flex h-[80px] items-center justify-between gap-3">
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
            <Link
              href="/"
              className="cursor-pointer rounded-full bg-[#1A2312] px-3 py-[6px] text-[10px] font-medium text-[#C2F800] sm:px-4"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="cursor-pointer px-3 py-[6px] text-[10px] text-[#85858a] sm:px-4"
            >
              My Plan
            </Link>
          </div>

          {/* Counters */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            {/* Plan */}

            {/* <div className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 text-[10px] text-[#b5b5b9] sm:gap-2"
              >
                <div>Plan</div>

                <div className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#C2F800] px-1 text-[9px] font-bold text-black">
                  0
                </div>
              </button>
            </div> */}

            <PlanCounter />

            {/* Saved */}
            {/* 
            <div className="flex items-center gap-1.5 text-[10px] text-[#85858a] sm:gap-2">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer "
              >
                Saved
                <div className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#292a30] px-1 text-[9px] text-[#2D313B]">
                  0
                </div>
              </button>
            </div> */}
            <SaveCounter />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
