"use client";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Example dropdown menu items
  const dropdownItems = [
    { id: 1, label: "Link 1", href: "/link1" },
    { id: 2, label: "Link 2", href: "/link2" },
  ];

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
            <Dropdown items={dropdownItems} title="Parent" />
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

const Dropdown = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <summary
        tabIndex={0}
        role="button"
        onClick={toggleDropdown}
        className="cursor-pointer"
      >
        {title}
      </summary>
      {isOpen && (
        <ul className="absolute bg-blue-400 rounded-none p-2 w-52 z-50 shadow dropdown-content mt-36">
          {items.map((item) => (
            <li key={item.id} className="hover:bg-blue-700 font-semibold">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
