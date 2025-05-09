import { FaBath, FaCut, FaTooth, FaClipboard, FaRuler, FaSprayCan } from "react-icons/fa";
import Link from "next/link";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

function ServiceItem({ icon, title, description, bgColor }: ServiceItemProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className={`${bgColor} w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mb-4`}>
        <div className="text-2xl sm:text-3xl text-white">{icon}</div>
      </div>
      <h3 className="text-lg sm:text-xl font-pacifico text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-pacifico text-[#46aebe] mb-4">Our Grooming Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Each pet receives dedicated, professional care tailored to their needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center mb-12 max-w-6xl mx-auto">
          <ServiceItem
            icon={<FaBath />}
            title="Bathing"
            description="Relaxing bath with premium shampoo"
            bgColor="bg-coral"
          />

          <ServiceItem
            icon={<FaRuler />}
            title="Nail Trimming"
            description="Safe and precise nail care"
            bgColor="bg-light-blue"
          />

          <ServiceItem
            icon={<FaClipboard />}
            title="Ear Cleaning"
            description="Gentle and thorough ear care"
            bgColor="bg-coral"
          />

          <ServiceItem
            icon={<FaTooth />}
            title="Teeth Brushing"
            description="Promotes dental health"
            bgColor="bg-pale-green"
          />

          <ServiceItem
            icon={<FaSprayCan />}
            title="Finishing Touch"
            description="Perfume, bows, and bandanas"
            bgColor="bg-light-blue"
          />
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#46aebe] text-white font-medium hover:bg-opacity-90 transition-colors"
          >
            View All Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
