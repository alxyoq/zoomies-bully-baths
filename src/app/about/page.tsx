import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Zoomies Bully Baths, our story, mission, and why we're passionate about providing exceptional mobile pet grooming services.",
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-light-blue py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-pacifico text-white">About Us</h1>
            <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
              Zoomies Bully Baths brings professional grooming services directly to your doorstep
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-pacifico text-[#46aebe] mb-6 text-center">Our Story</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="md:w-1/3">
                  <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      alt="Zoomies Bully Baths van"
                      src="images/about-me-pic.jpg"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Hi 👋, my name is Trish and I own a mobile dog bathing business called <strong>Zoomies Bully Baths</strong>. Maybe you’ve seen a big blue dog driving around Gloucester and Camden County — that’s me!
                  </p>
                  <p className="text-gray-700 mb-4">
                    I’m a proud USMC veteran and offer mobile bathing, de-shedding, nail trimming, and anal gland services. If your fur baby is anxious, this might be the perfect fit. My motto is <em>“I go at their pace, not mine.”</em> I do everything I can to create a calm, stress-free experience and take extra care to make them feel safe and comfortable.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When I started Zoomies Bully Baths, I wanted to be an ambassador for the breed. (I’m also a two-time DBU adopter!) DBU helped inspire both my business name and my motto. I want to help shift the way these amazing dogs are seen and treated — so I put them front and center in my branding.
                  </p>
                  <p className="text-gray-700">
                    If you're looking for grooming with heart, just know there’s always a place in my business (and my heart) for your fur babies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-pacifico text-[#46aebe] mb-6 text-center">Our Mission</h2>
            <div className="bg-teal-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 text-center text-xl italic mb-6">
                "To provide exceptional mobile grooming services that prioritize your pet's comfort, safety, and well‑being while offering unmatched convenience for pet owners."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-pacifico text-[#46aebe] mb-3">For Your Pet</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>One‑on‑one attention throughout the grooming session</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>Reduced anxiety in a familiar environment</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>No exposure to other animals during grooming</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>Personalized care tailored to your pet's needs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-pacifico text-[#46aebe] mb-3">For You</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>No travel time or waiting at a salon</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>Flexible scheduling that works with your lifestyle</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>Direct communication with the groomer</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                      <span>Peace of mind knowing your pet is comfortable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-pacifico text-[#46aebe] mb-6 text-center">Service Area</h2>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-[#46aebe] text-2xl mr-2" />
                <span className="text-xl font-pacifico text-gray-700">Gloucester & Camden County, NJ</span>
              </div>
              <p className="text-gray-700 mb-6">
                Zoomies Bully Baths proudly serves Gloucester and Camden County, NJ. Our big blue mobile grooming van brings comfort, care, and convenience right to your doorstep.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-coral text-white font-medium hover:bg-opacity-90 transition-colors"
                >
                  Book Your Mobile Grooming Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
