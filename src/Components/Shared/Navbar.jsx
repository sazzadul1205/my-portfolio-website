"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 w-full transition-all duration-300 px-8 sm:px-16 lg:px-52 z-30 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex-1">
        <a className="font-semibold text-xl">Sazzadul Islam Molla</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-5">
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-blue-400 rounded- px-5 w-52 z-50">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
