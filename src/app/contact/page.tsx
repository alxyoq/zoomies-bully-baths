import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a mobile grooming appointment for your pet or get in touch with any questions. We bring professional pet grooming services right to your doorstep.",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-light-blue py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-pacifico text-white">Contact Us</h1>
            <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
              Book your mobile grooming appointment or get in touch with any questions
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Appointment Form */}
              <div>
                <h2 className="text-3xl font-pacifico text-[#46aebe] mb-6">Book an Appointment</h2>
                <p className="text-gray-700 mb-6">
                  Fill out the form below to request an appointment, and we'll get back to you as soon as possible to confirm your booking.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-1">
                      Pet's Name *
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="petAge" className="block text-sm font-medium text-gray-700 mb-1">
                        Pet Age *
                      </label>
                      <select
                        id="petAge"
                        name="petAge"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                      >
                        <option value="">Select...</option>
                        <option value="Less than 1 year old">Less than 1 year old</option>
                        <option value="1-5 years old">1-5 years old</option>
                        <option value="Older than 5 years old">Older than 5 years old</option>
						<option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">
                        Breed
                      </label>
                      <input
                        type="text"
                        id="breed"
                        name="breed"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                    >
                      <option value="">Select...</option>
                      <option value="basic">Basic Grooming (Bath & Brush)</option>
                      <option value="other">Other/Special Request</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests or Comments
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46aebe]"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-coral text-white font-medium rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>

              {/* Updated Contact Info with location removed */}
              <div>
                <h2 className="text-3xl font-pacifico text-[#46aebe] mb-6">Contact Information</h2>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 bg-light-blue p-3 rounded-full">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+18567250059" className="hover:text-[#46aebe]">(856) 725-0059</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-coral p-3 rounded-full">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-700 break-all">
                        <a href="mailto:ZoomiesBullyBaths@gmail.com" className="hover:text-[#46aebe]">
                          zoomiesbullybaths@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Mobile grooming services by appointment only.</p>
                    <p>Please contact us to schedule your appointment.</p>
                    <p className="font-semibold mt-4">We come to you!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
