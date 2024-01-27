import { PiMagnifyingGlass } from "react-icons/pi";

export default function SearchBar(){
    return (
        <div className="flex w-full items-center justify-center rounded-xl bg-gray-300 p-3 text-black shadow-lg">
        <PiMagnifyingGlass className="cursor-pointer" />
        <input
          placeholder="type to search..."
          className="w-full bg-gray-300 px-4 focus:outline-none"
        ></input>
      </div>
    )
}