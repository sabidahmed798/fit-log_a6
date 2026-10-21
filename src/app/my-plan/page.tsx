// "use client";

// import React from "react";

// import Image from "next/image";

// import Link from "next/link";

// // import { useLibrary } from "@/context/LibraryContext";

// import { useLibrary, ILibrary } from "@/contex/LibraryContex";

// const MyPlan = () => {
//   const { todayPlan } = useLibrary();

//   const totalExercises = todayPlan.length;

//   const totalDuration = todayPlan.reduce(
//     (total, exercise) => total + exercise.duration,

//     0,
//   );

//   const totalCalories = todayPlan.reduce(
//     (total, exercise) => total + exercise.caloriesBurned,

//     0,
//   );

//   return (
//     <main className="min-h-screen bg-[#0f1013] px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-8">
//       <div className="container mx-auto">
//         {/* Header */}

//         <div>
//           <h1 className="text-2xl font-black uppercase sm:text-3xl">MY PLAN</h1>

//           <p className="mt-1 text-[8px] text-gray-500 sm:text-[10px]">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>

//         {/* Stats */}

//         <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-lg border border-[#25262b] bg-[#151619]">
//           <div className="border-r border-[#25262b] px-3 py-4">
//             <p className="text-[7px] text-gray-500">Exercises</p>

//             <p className="mt-1 text-lg font-black">{totalExercises}</p>
//           </div>

//           <div className="border-r border-[#25262b] px-3 py-4">
//             <p className="text-[7px] text-gray-500">Minutes</p>

//             <p className="mt-1 text-lg font-black">{totalDuration}</p>
//           </div>

//           <div className="px-3 py-4">
//             <p className="text-[7px] text-gray-500">Calories</p>

//             <p className="mt-1 text-lg font-black">{totalCalories}</p>
//           </div>
//         </div>

//         {/* Tabs */}

//         <div className="mt-4 flex items-center justify-between">
//           <div className="flex overflow-hidden rounded-md border border-[#25262b]">
//             <button
//               type="button"
//               className="bg-[#1b1c20] px-4 py-2 text-[7px] text-gray-400"
//             >
//               Today's Plan
//             </button>

//             <button
//               type="button"
//               className="bg-[#151619] px-4 py-2 text-[7px] text-gray-300"
//             >
//               Saved
//             </button>
//           </div>

//           <button
//             type="button"
//             className="rounded-md border border-[#25262b] bg-[#151619] px-3 py-2 text-[7px] text-gray-400"
//           >
//             {/* Sort by Duration */}
//             <div>
//               <div className="dropdown dropdown-bottom dropdown-end">
//                 <div tabIndex={0} role="button" className="btn ">
//                   Sort by Duration
//                 </div>
//                 <ul
//                   tabIndex={-1}
//                   className="dropdown-content menu bg-base-100 rounded-box z-0 w-52 p-1 shadow-sm"
//                 >
//                   <li>
//                     <a>Calories</a>
//                   </li>
//                   <li>
//                     <a>Rating</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </button>
//         </div>

//         {/* Empty State */}

//         {todayPlan.length === 0 ? (
//           <div className="mt-3 flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-[#202126] bg-[#101114]">
//             <h2 className="text-[10px] font-black uppercase text-gray-300">
//               NOTHING HERE YET
//             </h2>

//             <p className="mt-1 text-[7px] text-gray-600">
//               Browse the library and add a lift to get moving.
//             </p>

//             <Link
//               href="/librarys"
//               className="mt-3 rounded-md bg-[#b7ff00] px-4 py-2 text-[7px] font-black uppercase text-black"
//             >
//               Go to workouts
//             </Link>
//           </div>
//         ) : (
//           /* Exercise List */

//           <div className="mt-3 space-y-2">
//             {todayPlan.map((exercise) => (
//               <div
//                 key={exercise.id}
//                 className="flex items-center gap-3 rounded-lg border border-[#25262b] bg-[#151619] p-3"
//               >
//                 {/* Image */}

//                 <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
//                   <Image
//                     src={
//                       Array.isArray(exercise.image)
//                         ? exercise.image[0]
//                         : exercise.image
//                     }
//                     alt={exercise.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Info */}

//                 <div className="min-w-0 flex-1">
//                   <h3 className="truncate text-[10px] font-black uppercase text-white">
//                     {exercise.name}
//                   </h3>

//                   <p className="mt-1 text-[7px] text-gray-500">
//                     {exercise.muscleGroups.join(" • ")}
//                   </p>

//                   <div className="mt-2 flex gap-3 text-[7px] text-gray-400">
//                     <span>{exercise.sets} sets</span>

//                     <span>{exercise.reps}</span>

//                     <span>{exercise.duration} min</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default MyPlan;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLibrary } from "@/contex/LibraryContex";

type ActiveTab = "today" | "saved";
type SortOption = "default" | "duration" | "calories" | "rating";

const MyPlan = () => {
  const { todayPlan, save } = useLibrary();

  const [activeTab, setActiveTab] = useState<ActiveTab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const exercises = activeTab === "today" ? todayPlan : save;

  const sortedExercises = [...exercises].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalExercises = exercises.length;

  const totalDuration = exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = exercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0f1013] px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-black uppercase sm:text-3xl">MY PLAN</h1>

          <p className="mt-1 text-[8px] text-gray-500 sm:text-[10px]">
            Manage your daily workouts and saved exercises.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-lg border border-[#25262b] bg-[#151619]">
          <div className="border-r border-[#25262b] px-3 py-4">
            <p className="text-[7px] text-gray-500">Exercises</p>
            <p className="mt-1 text-lg font-black">{totalExercises}</p>
          </div>

          <div className="border-r border-[#25262b] px-3 py-4">
            <p className="text-[7px] text-gray-500">Minutes</p>
            <p className="mt-1 text-lg font-black">{totalDuration}</p>
          </div>

          <div className="px-3 py-4">
            <p className="text-[7px] text-gray-500">Calories</p>
            <p className="mt-1 text-lg font-black">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs and Sorting */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex overflow-hidden rounded-md border border-[#25262b]">
            <button
              type="button"
              onClick={() => {
                setActiveTab("today");
                setSortBy("default");
              }}
              className={`px-4 py-2 text-[8px] ${
                activeTab === "today"
                  ? "bg-[#b7ff00] font-bold text-black"
                  : "bg-[#151619] text-gray-400"
              }`}
            >
              Today&apos;s Plan ({todayPlan.length})
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("saved");
                setSortBy("default");
              }}
              className={`px-4 py-2 text-[8px] ${
                activeTab === "saved"
                  ? "bg-[#b7ff00] font-bold text-black"
                  : "bg-[#151619] text-gray-400"
              }`}
            >
              Saved ({save.length})
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="rounded-md border border-[#25262b] bg-[#151619] px-3 py-2 text-[8px] text-gray-300 outline-none"
            aria-label="Sort exercises"
          >
            <option value="default">Default order</option>
            <option value="duration">Duration: Low to High</option>
            <option value="calories">Calories: High to Low</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </div>

        {/* Empty State */}
        {sortedExercises.length === 0 ? (
          <div className="mt-3 flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-[#202126] bg-[#101114]">
            <h2 className="text-[10px] font-black uppercase text-gray-300">
              {activeTab === "today"
                ? "NO EXERCISES IN YOUR PLAN"
                : "NO SAVED EXERCISES"}
            </h2>

            <p className="mt-2 text-center text-[8px] text-gray-500">
              {activeTab === "today"
                ? "Browse the library and add an exercise to your plan."
                : "Save an exercise from the library to see it here."}
            </p>

            <Link
              href="/librarys"
              className="mt-4 rounded-md bg-[#b7ff00] px-4 py-2 text-[8px] font-black uppercase text-black"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          /* Exercise List */
          <div className="mt-3 space-y-2">
            {sortedExercises.map((exercise) => {
              const imageSrc = Array.isArray(exercise.image)
                ? exercise.image[0]
                : exercise.image;

              return (
                <div
                  key={exercise.id}
                  className="flex items-center gap-3 rounded-lg border border-[#25262b] bg-[#151619] p-3"
                >
                  {/* Image */}
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-[#202126]">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={exercise.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[8px] text-gray-500">
                        No image
                      </div>
                    )}
                  </div>

                  {/* Exercise Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[10px] font-black uppercase text-white">
                      {exercise.name}
                    </h3>

                    <p className="mt-1 text-[7px] text-gray-500">
                      {exercise.muscleGroups.join(" • ")}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-3 text-[7px] text-gray-400">
                      <span>{exercise.sets} sets</span>
                      <span>{exercise.reps}</span>
                      <span>{exercise.duration} min</span>
                      <span>{exercise.caloriesBurned} kcal</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="shrink-0 text-right">
                    <span className="text-[8px] text-[#b7ff00]">
                      ★ {exercise.rating}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
