import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-light-blue py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-pacifico text-[#46aebe] mb-2">Zoomies Bully Baths</h3>
            <p className="text-gray-600 text-sm sm:text-base">Mobile Pet Grooming</p>
          </div>
          <div className="flex space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Facebook"
              href="https://www.facebook.com/TrishZoppel/"
            >
              <FaFacebook size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-colors"
              aria-label="Instagram"
              href="https://www.instagram.com/zoomiesbullybaths/"
            >
              <FaInstagram size={24} />
            </a>
            <a
              className="text-red-600 hover:text-red-800 transition-colors"
              aria-label="Email"
              href="mailto:ZoomiesBullyBaths@gmail.com"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-t border-teal-100">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#46aebe] mb-3">Contact Us</h4>
            <div className="flex items-start justify-center md:justify-start space-x-2 mb-2">
              <FaPhone className="text-[#46aebe] mt-0.5" />
              <p className="text-gray-600 text-sm">
                <a href="tel:+18567250059" className="hover:text-[#46aebe]">(856) 725-0059</a>
              </p>
            </div>
            <div className="flex items-start justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-[#46aebe] mt-0.5" />
              <p className="text-gray-600 text-sm break-all">
                <a href="mailto:ZoomiesBullyBaths@gmail.com" className="hover:text-[#46aebe]">
                  ZoomiesBullyBaths@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/images/logo-text.png"
              alt="Zoomies Bully Baths Logo Text"
              width={200}
              height={64}
              priority
            />
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-[#46aebe] mb-3">Hours</h4>
            <p className="text-gray-600 text-sm mb-1">
              Please contact us to schedule your mobile grooming appointment.
            </p>
            <p className="text-gray-600 text-sm">We come to you!</p>
          </div>
        </div>

        <div className="border-t border-teal-100 pt-6 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Zoomies Bully Baths Pet Grooming LLC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/about" className="text-xs sm:text-sm text-gray-500 hover:text-[#46aebe] mr-4">
                About Us
              </Link>
              <Link href="/contact" className="text-xs sm:text-sm text-gray-500 hover:text-[#46aebe]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
