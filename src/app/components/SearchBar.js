import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex px-10 py-1 bg-blue-200 items-center gap-2">
      <Image
        src={"/assets/searchicon.png"}
        alt={"Search icon"}
        width={30}
        height={30}
      />
      <span className="text-blue-500">¿Que buscás?</span>
    </div>
  );
};

export default SearchBar;
