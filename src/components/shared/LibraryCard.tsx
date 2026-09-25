import Image from "next/image";
import React from "react";

const LibraryCard = ({ library }) => {
  return (
    <div
      key={library.id}
      className="group overflow-hidden rounded-[8px] border border-[#25262b] bg-[#151619] transition-all duration-300 hover:-translate-y-[2px]"
    >
      {/* Image */}
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#101114]">
        <Image
          src={library.image}
          alt={library.name}
          width={800}
          height={600}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="px-2.5 py-2.5 sm:px-3 sm:py-3">
        {/* Tags */}
        <div className="mb-2 flex min-h-[11px] flex-wrap items-center gap-1">
          {library.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-[#b7ff00] px-[5px] py-[2px] text-[5px] sm:text-[6px] font-black uppercase tracking-tight leading-none text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[-0.01em] leading-[1.25] text-white">
          {library.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-[6px] sm:text-[7px] font-medium leading-none text-gray-500">
          {library.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2.5 flex items-center gap-2.5 border-t border-[#24262b] pt-2 text-[5px] sm:text-[6px] font-medium leading-none text-gray-500">
          <div className="flex items-center gap-[3px] whitespace-nowrap">
            <span className="text-[7px]">◷</span>
            <span>{library.duration} min</span>
          </div>

          <div className="flex items-center gap-[3px] whitespace-nowrap">
            <span className="text-[7px]">🔥</span>
            <span>{library.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-[3px] whitespace-nowrap">
            <span className="text-[7px]">★</span>
            <span>{library.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
