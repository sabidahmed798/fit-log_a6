// "use client";

// import React, { createContext, ReactNode, useContext, useState } from "react";

// import { ILibrary } from "@/Types/library.type";

// interface LibraryContextType {
//   todayPlan: ILibrary[];
//   setTodayPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;

//   save: ILibrary[];
//   setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>;

//   toast: string;
//   showToast: (message: string) => void;
// }

// const LibraryContex = createContext<LibraryContextType | undefined>(undefined);

// const LibraryProvider = ({ children }: { children: ReactNode }) => {
//   const [todayPlan, setTodayPlan] = useState<ILibrary[]>([]);
//   const [save, setSave] = useState<ILibrary[]>([]);
//   const [toast, setToast] = useState("");

//   const showToast = (message: string) => {
//     setToast(message);

//     setTimeout(() => {
//       setToast("");
//     }, 2500);
//   };

//   return (
//     <LibraryContex.Provider
//       value={{
//         todayPlan,
//         setTodayPlan,
//         save,
//         setSave,
//         toast,
//         showToast,
//       }}
//     >
//       {children}

//       {toast && (
//         <div className="fixed right-4 top-5 z-[9999] rounded-md border border-[#b7ff00] bg-[#151619] px-4 py-3 text-xs font-bold text-white shadow-lg">
//           {toast}
//         </div>
//       )}
//     </LibraryContex.Provider>
//   );
// };

// export const useLibrary = () => {
//   const context = useContext(LibraryContex);

//   if (!context) {
//     throw new Error("useLibrary must be used inside LibraryProvider");
//   }

//   return context;
// };

// export default LibraryProvider;

"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

export interface ILibrary {
  id: number | string;

  name: string;

  image: string | string[];

  equipment: string;

  difficulty: string;

  duration: number;

  caloriesBurned: number;

  sets: number;

  muscleGroups: string[];

  reps: string;

  rating: number;

  description: string;

  instructions: string[];
}

interface LibraryContextType {
  todayPlan: ILibrary[];

  setTodayPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;

  save: ILibrary[];

  setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}

const LibraryContex = createContext<LibraryContextType | undefined>(undefined);

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<ILibrary[]>([]);

  const [save, setSave] = useState<ILibrary[]>([]);

  return (
    <LibraryContex.Provider
      value={{
        todayPlan,

        setTodayPlan,

        save,

        setSave,
      }}
    >
      {children}
    </LibraryContex.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContex);

  if (!context) {
    throw new Error("useLibrary must be used inside LibraryProvider");
  }

  return context;
};

export default LibraryProvider;
