"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[100] bg-white shadow-sm h-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Zoomies Logo"
            width={40}
            height={40}
            priority
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-pacifico text-[#46aebe]">
              Zoomies Bully Baths
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Mobile Pet Grooming
            </p>
          </div>
        </Link>

        {/* Hamburger Icon */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#46aebe] transition-all duration-300 ${
              menuOpen ? "top-1/2 -translate-y-1/2" : "top-[10px]"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#46aebe] transition-all duration-300 ${
              menuOpen ? "opacity-0" : "top-[16px]"
            }`}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-gray-700 hover:text-[#46aebe] text-lg font-semibold"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center transform hover:scale-110 transition-transform">
            <div className="rounded-full bg-light-blue p-2 mr-2">
              <FaPhone className="text-white" />
            </div>
            <div>
              <p className="text-black text-sm">Call or text for an appointment</p>
              <a
                href="tel:+18567250059"
                className="text-black text-lg font-bold"
              >
                (856) 725-0059
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-md z-[90] transform transition-transform duration-300 ease-in-out will-change-transform ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-6">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#46aebe] text-base font-semibold"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-6 flex items-center transform hover:scale-105 transition-transform">
          <div className="rounded-full bg-light-blue p-2 mr-2">
            <FaPhone className="text-white" />
          </div>
          <div>
            <p className="text-black text-sm">Call or text for an appointment</p>
            <a
              href="tel:+18567250059"
              className="text-black text-lg font-bold"
            >
              (856) 725-0059
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
