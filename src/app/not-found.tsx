import { Layout } from "@/components/Layout";
import Link from "next/link";
import { FaBone } from "react-icons/fa";

export default function NotFound() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <span className="text-9xl font-bold text-coral">404</span>
          <h1 className="text-4xl font-pacifico text-[#46aebe] mt-6 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! It seems like this page has wandered off. Just like a curious pup, it's gone exploring!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-coral hover:bg-opacity-90 text-white font-medium rounded-full transition-all"
          >
            <FaBone className="mr-2" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
