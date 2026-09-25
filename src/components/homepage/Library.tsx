// import React from "react";

// const getLibrary = async () => {
//   const responce = await fetch(" https://api.abcz.workers.dev/api/fitlog");
//   const data = responce.json();
//   return data;
// };

// const Library = async () => {
//   const libraryData = await getLibrary();

//   console.log(libraryData, "Library Data");
//   return (
//     <section className="container mx-auto px-6 items-center justify-center my-[70px] ">
//       <h1>THE LIBRARY</h1>
//       <p>Twelve lifts covering every major muscle group.</p>

//       {libraryData.map((library, ind) => {
//         return <div key={ind}>{library.name}</div>;
//       })}
//     </section>
//   );
// };

// export default Library;
import Image from "next/image";
import React from "react";
import LibraryCard from "../shared/LibraryCard";

const getLibrary = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  const data = await response.json();

  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <section className="container mx-auto px-3 sm:px-5 lg:px-6 my-12 sm:my-16">
      {/* Header */}
      <div className="mb-5 sm:mb-6">
        <h1 className="text-[17px] sm:text-[19px] font-black uppercase tracking-[-0.02em] leading-none text-white">
          THE LIBRARY
        </h1>

        <p className="mt-1.5 text-[7px] sm:text-[8px] font-medium leading-relaxed text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
        {libraryData.map((library, ind) => {
          return <LibraryCard key={ind} library={library} />;
        })}
      </div>
    </section>
  );
};

export default Library;
