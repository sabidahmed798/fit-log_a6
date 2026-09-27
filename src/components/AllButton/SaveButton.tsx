"use client";

import React from "react";

import { useLibrary } from "@/contex/LibraryContex";
import { ILibrary } from "@/Types/library.type";

interface SaveButtonProps {
  library: ILibrary;
}

const SaveButton = ({ library }: SaveButtonProps) => {
  const { save, setSave, showToast } = useLibrary();

  const handleSave = () => {
    const alreadySaved = save.some(
      (item) => String(item.id) === String(library.id),
    );

    if (alreadySaved) {
      showToast("Already saved");
      return;
    }

    setSave((prev) => [...prev, library]);

    showToast("Saved for later");
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="flex items-center gap-1.5 rounded-md border border-[#303136] bg-[#151619] px-3.5 py-2 text-[8px] font-medium text-gray-400 transition hover:bg-[#1c1d21] sm:px-4 sm:py-2.5 sm:text-[9px]"
    >
      <span className="text-[10px]">♡</span>
      Save for later
    </button>
  );
};

export default SaveButton;
