import companyLogo from "../../assets/dino_ventures_logo.png";
import { Search, Menu } from "lucide-react";

export default function Header({
  search,
  setSearch,
  toggleSidebar,
  resetHome,
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#242424] h-14 flex items-center px-4 shadow">
      {/* LEFT */}
      <div className="flex items-center gap-2 md:gap-4 min-w-max md:w-56 shrink-0 pr-4">
        <button
          onClick={toggleSidebar}
          className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-white"
        >
          <Menu className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div
          onClick={resetHome}
          className="flex items-center gap-1.5 md:gap-2 cursor-pointer group"
        >
          <img
            src={companyLogo}
            className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover:scale-110"
            alt="logo"
          />
          <span className="font-bold text-sm md:text-lg text-white tracking-tight leading-none">
            DinoVenture
          </span>
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-[720px]">
          <div className="flex flex-1 items-center bg-[#121212] border border-white/10 rounded-full px-4">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="bg-transparent w-full py-2 outline-none text-white placeholder:text-gray-400"
            />
          </div>

          {/* <button className="bg-white/10 border-y border-r border-white/10 px-5 rounded-r-full hover:bg-white/20">
            <Search className="w-5 h-5 text-white" />
          </button> */}
        </div>
      </div>
    </header>
  );
}
