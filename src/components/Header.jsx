'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const AcademicsDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <li className="relative cursor-pointer" ref={dropdownRef}>
      <span onClick={() => setOpen((prev) => !prev)}>ACADEMICS</span>
      {open && (
        <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none bg-white text-black mt-2 p-2 rounded shadow z-10 min-w-[200px] text-left">
          <Link href="/Academics/Primary" className="block px-4 py-2 hover:bg-gray-100">Primary</Link>
          <Link href="/Academics/Secondary" className="block px-4 py-2 hover:bg-gray-100">Secondary</Link>
          <Link href="/Academics/Higher" className="block px-4 py-2 hover:bg-gray-100">Senior Secondary</Link>
          <Link href="/Cirriculam" className="block px-4 py-2 hover:bg-gray-100">Cirriculam</Link>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className=" font-medium w-full">
      {/* Top Section */}
   

      {/* Navigation */}
      <nav className=" text-black w-full">
        <div className="mx-auto px-4">
          {/* Mobile toggle button */}
          <div className="md:hidden flex justify-between items-center py-3">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {/* simple hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <ul
            className={`${
              mobileOpen ? 'flex flex-col' : 'hidden'
            } md:flex flex-wrap justify-around items-center w-full py-3 text-sm md:text-base text-center`}
          >
            <li className="cursor-pointer py-2 md:py-0">
              <Link href="/Home">LOGO</Link>
            </li>

            <AcademicsDropdown />

            <li className="relative group cursor-pointer py-2 md:py-0">
              <span>LOGO</span>
             
            </li>

            <li className="cursor-pointer py-2 md:py-0">
              <Link href="/Infracstructure">BOOKING HISTORY</Link>
            </li>
            <li className="cursor-pointer py-2 md:py-0">
              <Link href="/Admissions">FAVORITES</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
