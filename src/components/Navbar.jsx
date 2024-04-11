import { useState } from "react";

// icons
import {
  AiFillBuild,
  AiOutlineAlignRight,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full p-4 px-8 h-[10vh] z-50  bg-zinc-900 border-b-2 border-zinc-200 ">
      <div className=" xl:w-2/4  text-center -mt-4">
        <span className="text-2xl font-bold text-white relative">
          HectorCapera <AiFillBuild className="absolute left-0" />
        </span>
      </div>
      <nav
        className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 bg-zinc-900 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:pr-40 gap-10 transition-all duration-500 z-50 text-gray-200`}
      >
        <a href="#home" className="">
          Home
        </a>
        <a href="#aboutUs" className="">
          About Us
        </a>
        <a href="#services" className="">
          Services
        </a>
        <a href="#aboutUs" className="">
          Products
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? (
          <AiOutlineAlignRight className="text-white" />
        ) : (
          <AiOutlineClose className="text-white" />
        )}
      </button>
    </header>
  );
};

export default Navbar;
