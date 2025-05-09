import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Zoomies Logo"
              width={50}
              height={50}
              priority
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div>
              <h1 className="text-3xl font-pacifico text-[#46aebe]">Zoomies Bully Baths</h1>
              <p className="text-lg text-gray-600">Mobile Pet Grooming</p>
            </div>
          </Link>
        </div>

        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <div className="md:flex md:space-x-6 mb-4 md:mb-0 md:mr-8">
            <Link href="/" className="text-gray-700 hover:text-[#46aebe] px-3 py-2 text-lg font-semibold">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#46aebe] px-3 py-2 text-lg font-semibold">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#46aebe] px-3 py-2 text-lg font-semibold">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#46aebe] px-3 py-2 text-lg font-semibold">
              Contact
            </Link>
          </div>

          <div className="flex items-center transform hover:scale-110 transition-transform">
            <div className="rounded-full bg-light-blue p-2 mr-2">
              <FaPhone className="text-white" />
            </div>
            <div>
              <p className="text-black text-sm">Call or text for an appointment</p>
              <a href="tel:+18567250059" className="text-black text-xl font-bold">(856) 725-0059</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
