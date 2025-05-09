import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";
import { FaBath, FaCheck } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Services & Pricing",
  description: "Explore our professional mobile pet grooming services and packages. From basic baths to full grooming experiences, we have the perfect option for your pet.",
};

interface PriceTableProps {
  title: string;
  prices: {
    size: string;
    price: string;
  }[];
  bgColor: string;
  icon: React.ReactNode;
  description: string;
  includes: string[];
}

function PriceTable({ title, prices, bgColor, icon, description, includes }: PriceTableProps) {
  return (
    <div className="mb-16">
      <div className={`${bgColor} rounded-t-lg p-6 text-center`}>
        <div className="flex justify-center mb-2">
          <div className="bg-white p-4 rounded-full text-2xl">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-pacifico text-white mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>

      <div className="bg-white rounded-b-lg shadow-md">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Includes:</h4>
          <ul className="space-y-2 mb-6">
            {includes.map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <FaCheck className="text-[#46aebe] mt-1 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold mb-4">Pricing:</h4>
            <div className="space-y-2">
              {prices.map((price) => (
                <div key={price.size} className="flex justify-between items-center text-gray-700">
                  <span>{price.size}</span>
                  <span className="font-bold">{price.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-coral text-white font-medium hover:bg-opacity-90 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const basicService = {
    title: "Basic Dog Grooming",
    description: "Bath & Brush (No Haircut)",
    bgColor: "bg-light-blue",
    icon: <FaBath className="text-[#46aebe]" />,
    includes: [
      "Bath & Brush",
      "Anal Gland Expression",
      "Nail Trimming & Filing",
      "Ear Cleaning",
      "Sanitary Shave",
      "Bow or Bandana"
    ],
    prices: [
      { size: "Mini (0-12 lbs)", price: "$70" },
      { size: "Small (13-24 lbs)", price: "$80" },
      { size: "Medium (25-39 lbs)", price: "$95" },
      { size: "Large (40-55 lbs)", price: "$110" },
      { size: "XL (56-70 lbs)", price: "$120" },
      { size: "XXL (71-95 lbs)", price: "$140" },
      { size: "3XL (96+ lbs)", price: "$160" }
    ]
  };

  const addOns = {
    title: "Add-On Services",
    description: "Upgrade your grooming experience",
    bgColor: "bg-pale-green",
    icon: <FaCheck className="text-[#46aebe]" />,
    includes: [
      "De-shedding",
      "De-matting",
      "Flea and Tick Treatment",
      "Teeth Brushing",
      "Special Shampoos",
      "Nail Polish"
    ],
    prices: [
      { size: "Small (0-39 lbs)", price: "Starting at $30" },
      { size: "Medium/Large (40-95 lbs)", price: "Starting at $40" },
      { size: "X-Large (96+ lbs)", price: "Starting at $50" }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-light-blue py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-pacifico text-white">Our Services</h1>
            <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
              Professional mobile grooming services for dogs of all sizes and breeds
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-pacifico text-[#46aebe] mb-4">Grooming Packages</h2>
              <p className="text-lg text-gray-600">
                Choose the perfect grooming package for your furry friend
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <PriceTable {...basicService} />
            </div>

            <div className="max-w-md mx-auto">
              <PriceTable {...addOns} />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-pacifico text-[#46aebe] mb-6 text-center">Additional Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Special Breeds:</span> Some breeds may require additional time or specialized care, which may result in additional charges.
                </p>
                <p>
                  <span className="font-semibold">Matting:</span> Heavily matted fur might require additional de-matting services. In some cases, shaving may be recommended as the most humane option.
                </p>
                <p>
                  <span className="font-semibold">Behavior:</span> Additional charges may apply for pets that require extra handling or extended grooming time due to behavior issues.
                </p>
                <p>
                  <span className="font-semibold">Cancellation Policy:</span> We request a 24-hour notice for cancellations. A cancellation fee may apply for late cancellations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
