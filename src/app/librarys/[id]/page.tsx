//

import TodayplanButton from "@/components/AllButton/TodayplanButton";

import { ILibrary } from "@/context/LibraryContext";

import Image from "next/image";

import Link from "next/link";

import React from "react";

interface ILibrary {
  id: string;

  name: string;

  image: string;

  description: string;

  muscleGroups: string[];

  equipment: string;

  difficulty: string;

  sets: number;

  reps: string;

  duration: number;

  caloriesBurned: number;

  rating: number;

  instructions: string[];
}

const getLibrary = async (id: string): Promise<ILibrary | null> => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch library");
  }

  const data = await response.json();

  const library = data.find((item: ILibrary) => String(item.id) === String(id));

  return library || null;
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const library = await getLibrary(id);

  if (!library) {
    return (
      <main className="min-h-screen bg-[#0f1013] px-4 py-10 text-white">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Exercise not found</h1>

          <Link
            href="/librarys"
            className="mt-4 inline-block rounded-md bg-[#b7ff00] px-4 py-2 text-sm font-bold text-black"
          >
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f1013] px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-7">
          {/* ================= LEFT IMAGE ================= */}

          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={library.image}
              alt={library.name}
              width={800}
              height={800}
              priority
              className="h-auto max-h-[620px] w-full object-cover object-center"
            />
          </div>

          {/* ================= RIGHT DETAILS ================= */}

          <div className="text-white">
            {/* Title */}

            <h1 className="text-2xl font-black uppercase leading-[1.05] tracking-tight sm:text-3xl">
              {library.name}
            </h1>

            {/* Description */}

            <p className="mt-2 max-w-[560px] text-[10px] leading-4 text-gray-500 sm:text-xs sm:leading-5">
              {library.description}
            </p>

            {/* Muscle Tags */}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {library.muscleGroups.map((muscle: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-[#b7ff00] px-2.5 py-1 text-[7px] font-black uppercase leading-none text-black sm:text-[8px]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= SPECS ================= */}

            <div className="mt-4 overflow-hidden rounded-lg border border-[#25262b] bg-[#151619]">
              {/* Equipment */}

              <div className="flex items-center justify-between border-b border-[#25262b] px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Equipment
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.equipment}
                </span>
              </div>

              {/* Difficulty */}

              <div className="flex items-center justify-between border-b border-[#25262b] px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Difficulty
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.difficulty}
                </span>
              </div>

              {/* Sets */}

              <div className="flex items-center justify-between border-b border-[#25262b] px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Sets
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.sets}
                </span>
              </div>

              {/* Reps */}

              <div className="flex items-center justify-between border-b border-[#25262b] px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Reps
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.reps}
                </span>
              </div>

              {/* Duration */}

              <div className="flex items-center justify-between border-b border-[#25262b] px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Duration
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.duration} min
                </span>
              </div>

              {/* Calories */}

              <div className="flex items-center justify-between border-b border-[#25262b] px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Calories
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}

              <div className="flex items-center justify-between px-3 py-2.5 sm:px-3.5">
                <span className="text-[7px] uppercase tracking-wide text-gray-500">
                  Rating
                </span>

                <span className="text-[8px] font-medium text-gray-300 sm:text-[9px]">
                  {library.rating}
                </span>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}

            <div className="mt-5">
              <h2 className="text-[9px] font-black uppercase tracking-wide text-white sm:text-[10px]">
                Instructions
              </h2>

              <ol className="mt-2.5 space-y-1.5">
                {library.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-2 text-[8px] leading-4 text-gray-400 sm:text-[9px]"
                    >
                      <span className="w-3 shrink-0 text-gray-400">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>

            {/* ================= ACTION BUTTONS ================= */}

            <div className="mt-5 flex flex-wrap gap-2">
              {/* Primary Button */}

              <TodayplanButton library={library} />

              {/* Secondary Button */}

              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-[#303136] bg-[#151619] px-3.5 py-2 text-[8px] font-medium text-gray-400 transition hover:bg-[#1c1d21] sm:px-4 sm:py-2.5 sm:text-[9px]"
              >
                <span className="text-[9px]">♡</span>
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
