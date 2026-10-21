"use client";

import { useLibrary } from "@/contex/LibraryContex";
import { useRouter } from "next/navigation";
import React from "react";

const SaveCounter = () => {
  const router = useRouter();
  const { save } = useLibrary();

  const savecounter = save.length;

  const handleScount = () => {
    console.log("Count Button trigger");
    router.push("/my-plan");
  };

  return (
    <div className="flex items-center gap-1.5 text-[10px] text-[#85858a] sm:gap-2">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2"
        onClick={handleScount}
      >
        Saved
        <div className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#292a30] px-1 text-[9px] text-[#2D313B]">
          {savecounter}
        </div>
      </button>
    </div>
  );
};

export default SaveCounter;
