// "use client";

// import React, { useState } from "react";

// import Image from "next/image";
// import Link from "next/link";

// import { useLibrary } from "@/contex/LibraryContex";
// import { ILibrary } from "@/Types/library.type";

// type TabType = "today" | "saved";

// type SortType = "duration" | "calories" | "rating";

// const MyPlan = () => {
//   const { todayPlan, setTodayPlan, save, setSave, showToast } = useLibrary();

//   const [activeTab, setActiveTab] = useState<TabType>("today");

//   const [sortBy, setSortBy] = useState<SortType>("duration");

//   const [doneIds, setDoneIds] = useState<number[]>([]);

//   const currentList = activeTab === "today" ? todayPlan : save;

//   const sortedList = [...currentList].sort((a, b) => {
//     if (sortBy === "duration") {
//       return a.duration - b.duration;
//     }

//     if (sortBy === "calories") {
//       return a.caloriesBurned - b.caloriesBurned;
//     }

//     return a.rating - b.rating;
//   });

//   const totalExercises = todayPlan.length;

//   const totalDuration = todayPlan.reduce(
//     (total, exercise) => total + exercise.duration,
//     0,
//   );

//   const totalCalories = todayPlan.reduce(
//     (total, exercise) => total + exercise.caloriesBurned,
//     0,
//   );

//   const handleRemove = (exercise: ILibrary) => {
//     if (activeTab === "today") {
//       setTodayPlan((prev) => prev.filter((item) => item.id !== exercise.id));
//     } else {
//       setSave((prev) => prev.filter((item) => item.id !== exercise.id));
//     }

//     setDoneIds((prev) => prev.filter((id) => id !== exercise.id));

//     showToast("Workout removed");
//   };

//   const handleDone = (exercise: ILibrary) => {
//     setDoneIds((prev) => {
//       if (prev.includes(exercise.id)) {
//         return prev.filter((id) => id !== exercise.id);
//       }

//       return [...prev, exercise.id];
//     });

//     showToast(
//       doneIds.includes(exercise.id)
//         ? "Workout marked as active"
//         : "Workout marked as done",
//     );
//   };

//   return (
//     <main className="min-h-screen bg-[#0f1013] px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-8">
//       <div className="container mx-auto">
//         {/* HEADER */}
//         <div>
//           <h1 className="text-2xl font-black uppercase sm:text-3xl">MY PLAN</h1>

//           <p className="mt-1 text-[8px] text-gray-500 sm:text-[10px]">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>

//         {/* METRICS */}
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

//         {/* TABS + SORT */}
//         <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
//           <div className="flex overflow-hidden rounded-md border border-[#25262b]">
//             <button
//               type="button"
//               onClick={() => setActiveTab("today")}
//               className={`px-4 py-2 text-[7px] ${
//                 activeTab === "today"
//                   ? "bg-[#1b1c20] text-white"
//                   : "bg-[#151619] text-gray-400"
//               }`}
//             >
//               Today's Plan
//             </button>

//             <button
//               type="button"
//               onClick={() => setActiveTab("saved")}
//               className={`px-4 py-2 text-[7px] ${
//                 activeTab === "saved"
//                   ? "bg-[#1b1c20] text-white"
//                   : "bg-[#151619] text-gray-400"
//               }`}
//             >
//               Saved
//             </button>
//           </div>

//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value as SortType)}
//             className="rounded-md border border-[#25262b] bg-[#151619] px-3 py-2 text-[7px] text-gray-400 outline-none"
//           >
//             <option value="duration">Sort by Duration</option>

//             <option value="calories">Sort by Calories</option>

//             <option value="rating">Sort by Rating</option>
//           </select>
//         </div>

//         {/* EMPTY STATE */}
//         {sortedList.length === 0 ? (
//           <div className="mt-3 flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-[#202126] bg-[#101114]">
//             <h2 className="text-[10px] font-black uppercase text-gray-300">
//               NOTHING HERE YET
//             </h2>

//             <p className="mt-1 text-center text-[7px] text-gray-600">
//               {activeTab === "today"
//                 ? "Browse the library and add a lift to get moving."
//                 : "Save a workout for later to see it here."}
//             </p>

//             <Link
//               href="/"
//               className="mt-3 rounded-md bg-[#b7ff00] px-4 py-2 text-[7px] font-black uppercase text-black"
//             >
//               Go to workouts
//             </Link>
//           </div>
//         ) : (
//           /* WORKOUT LIST */
//           <div className="mt-3 space-y-2">
//             {sortedList.map((exercise) => {
//               const isDone = doneIds.includes(exercise.id);

//               return (
//                 <div
//                   key={exercise.id}
//                   className={`rounded-lg border border-[#25262b] bg-[#151619] p-3 transition ${
//                     isDone ? "opacity-60" : ""
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     {/* IMAGE */}
//                     <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
//                       <Image
//                         src={exercise.image}
//                         alt={exercise.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* INFO */}
//                     <div className="min-w-0 flex-1">
//                       <h3
//                         className={`truncate text-[10px] font-black uppercase ${
//                           isDone ? "text-gray-500 line-through" : "text-white"
//                         }`}
//                       >
//                         {exercise.name}
//                       </h3>

//                       <p className="mt-1 text-[7px] text-gray-500">
//                         {exercise.equipment}
//                       </p>

//                       <div className="mt-2 flex flex-wrap gap-3 text-[7px] text-gray-400">
//                         <span>◷ {exercise.duration} min</span>

//                         <span>🔥 {exercise.caloriesBurned} kcal</span>

//                         <span>★ {exercise.rating}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* BUTTONS */}
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <Link
//                       href={`/librarys/${exercise.id}`}
//                       className="rounded-md border border-[#303136] bg-[#101114] px-3 py-1.5 text-[7px] font-bold text-gray-300 hover:bg-[#1d1e22]"
//                     >
//                       View Details
//                     </Link>

//                     {activeTab === "today" && (
//                       <button
//                         type="button"
//                         onClick={() => handleDone(exercise)}
//                         className={`rounded-md px-3 py-1.5 text-[7px] font-bold ${
//                           isDone
//                             ? "bg-gray-700 text-white"
//                             : "bg-[#b7ff00] text-black"
//                         }`}
//                       >
//                         ✓ {isDone ? "Done" : "Mark as Done"}
//                       </button>
//                     )}

//                     <button
//                       type="button"
//                       onClick={() => handleRemove(exercise)}
//                       className="rounded-md border border-[#303136] px-3 py-1.5 text-[7px] font-bold text-red-400 hover:bg-[#211518]"
//                     >
//                       ✕ Remove
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default MyPlan;

"use client";

import React from "react";

import Image from "next/image";

import Link from "next/link";

// import { useLibrary } from "@/context/LibraryContext";

import { useLibrary, ILibrary } from "@/contex/LibraryContex";

const MyPlan = () => {
  const { todayPlan } = useLibrary();

  const totalExercises = todayPlan.length;

  const totalDuration = todayPlan.reduce(
    (total, exercise) => total + exercise.duration,

    0,
  );

  const totalCalories = todayPlan.reduce(
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
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}

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

        {/* Tabs */}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex overflow-hidden rounded-md border border-[#25262b]">
            <button
              type="button"
              className="bg-[#1b1c20] px-4 py-2 text-[7px] text-gray-400"
            >
              Today's Plan
            </button>

            <button
              type="button"
              className="bg-[#151619] px-4 py-2 text-[7px] text-gray-300"
            >
              Saved
            </button>
          </div>

          <button
            type="button"
            className="rounded-md border border-[#25262b] bg-[#151619] px-3 py-2 text-[7px] text-gray-400"
          >
            Sort by Duration
          </button>
        </div>

        {/* Empty State */}

        {todayPlan.length === 0 ? (
          <div className="mt-3 flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-[#202126] bg-[#101114]">
            <h2 className="text-[10px] font-black uppercase text-gray-300">
              NOTHING HERE YET
            </h2>

            <p className="mt-1 text-[7px] text-gray-600">
              Browse the library and add a lift to get moving.
            </p>

            <Link
              href="/librarys"
              className="mt-3 rounded-md bg-[#b7ff00] px-4 py-2 text-[7px] font-black uppercase text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Exercise List */

          <div className="mt-3 space-y-2">
            {todayPlan.map((exercise) => (
              <div
                key={exercise.id}
                className="flex items-center gap-3 rounded-lg border border-[#25262b] bg-[#151619] p-3"
              >
                {/* Image */}

                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={
                      Array.isArray(exercise.image)
                        ? exercise.image[0]
                        : exercise.image
                    }
                    alt={exercise.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[10px] font-black uppercase text-white">
                    {exercise.name}
                  </h3>

                  <p className="mt-1 text-[7px] text-gray-500">
                    {exercise.muscleGroups.join(" • ")}
                  </p>

                  <div className="mt-2 flex gap-3 text-[7px] text-gray-400">
                    <span>{exercise.sets} sets</span>

                    <span>{exercise.reps}</span>

                    <span>{exercise.duration} min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
