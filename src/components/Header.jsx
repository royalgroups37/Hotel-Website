'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/Home' },
    { label: 'Stays', path: '/Stays' },
    { label: 'Booking History', path: '/BookingHistory' },
    { label: 'Favorites', path: '/Favorites' },
  ];

  const isActive = (path) =>
    path === '/Home'
      ? pathname === '/' || pathname === '/Home'
      : pathname === path;

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-base font-medium text-[#2c2c2c]">Logo</div>

        {/* Middle: Navigation */}
        <nav className="hidden md:flex justify-center items-center flex-1 gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`text-base cursor-pointer transition-colors duration-200 ${isActive(item.path)
                ? 'text-[#2c2c2c] font-medium border-b-2 border-[#ff385c]'
                : 'text-[#808080] hover:text-[#2c2c2c]'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/* Globe Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M8 0.25C10.059 0.255298 12.0317 1.07763 13.4848 2.53638C14.938 3.99512 15.7527 5.971 15.75 8.03C15.7431 10.041 14.9548 11.9706 13.5516 13.4111C12.1483 14.8516 10.2401 15.6903 8.23 15.75H7.98C5.96895 15.7458 4.03829 14.96 2.59588 13.5586C1.15347 12.1573 0.312273 10.2501 0.25 8.24V7.99C0.25265 5.93631 1.07034 3.96763 2.52345 2.51639C3.97657 1.06514 5.9463 0.249998 8 0.25ZM9.95 8.75H6.05C6.2 11.65 7.22 14.09 7.93 14.25H8C8.68 14.25 9.72 11.88 9.93 9.02L9.95 8.75ZM14.21 8.75H11.45C11.36 10.71 10.92 12.53 10.27 13.83C11.2839 13.4336 12.177 12.7795 12.8609 11.9325C13.5448 11.0855 13.9961 10.0747 14.17 9L14.21 8.75ZM4.54 8.75H1.8C1.93602 9.87388 2.37426 10.9398 3.06807 11.8344C3.76188 12.729 4.6853 13.4186 5.74 13.83C5.05294 12.3531 4.65899 10.757 4.58 9.13L4.55 8.75H4.54ZM5.74 2.17L5.62 2.22C4.59266 2.64311 3.69644 3.33201 3.02336 4.21598C2.35028 5.09995 1.92459 6.14713 1.79 7.25H4.54C4.63 5.42 5.02 3.71 5.6 2.44L5.74 2.17ZM7.99 1.75C7.29 1.75 6.21 4.26 6.05 7.25H9.95C9.8 4.35 8.77 1.91 8.06 1.75H7.99ZM10.27 2.18L10.3 2.23C11.0156 3.80947 11.4066 5.51655 11.45 7.25H14.2C14.0611 6.12971 13.6228 5.06757 12.9312 4.17536C12.2396 3.28315 11.3203 2.59385 10.27 2.18Z"
              fill="black"
            />
          </svg>
          {/* Profile/Menu Toggle */}
          <div className="flex items-center gap-3.5 px-4 py-2 rounded-full border border-[#ddd]">
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
              {/* Hamburger */}
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path d="M1 8H15M1 12H15M1 4H15" stroke="black" strokeWidth="1.5" />
              </svg>
            </button>
      
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 w-8 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M16.0002 0.700012C7.5602 0.700012 0.700195 7.56001 0.700195 16C0.700195 24.44 7.5602 31.3 16.0002 31.3C24.4402 31.3 31.3002 24.44 31.3002 16C31.3002 7.56001 24.4402 0.700012 16.0002 0.700012ZM16.0002 28.7C11.9802 28.7 8.4002 26.82 6.0702 23.89C7.69179 21.7686 9.95341 20.2258 12.5202 19.49C11.595 18.9035 10.833 18.0927 10.305 17.1329C9.77703 16.1731 9.50019 15.0955 9.5002 14C9.5002 12.2761 10.185 10.6228 11.404 9.40382C12.623 8.18483 14.2763 7.50001 16.0002 7.50001C17.7241 7.50001 19.3774 8.18483 20.5964 9.40382C21.8154 10.6228 22.5002 12.2761 22.5002 14C22.501 15.097 22.2245 16.1763 21.6966 17.1379C21.1686 18.0994 20.4062 18.9119 19.4802 19.5C22.0473 20.2352 24.3091 21.7781 25.9302 23.9C24.7438 25.3968 23.2345 26.606 21.5149 27.4372C19.7953 28.2684 17.9101 28.7001 16.0002 28.7Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base ${isActive(item.path)
                  ? 'text-[#2c2c2c] font-medium'
                  : 'text-[#808080] hover:text-[#2c2c2c]'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
