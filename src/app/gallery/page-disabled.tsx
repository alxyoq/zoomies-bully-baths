import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our gallery of pet transformations and happy clients. See the amazing results of our professional mobile pet grooming services.",
};

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

function GalleryImage({ src, alt, category }: GalleryImageProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-square w-full relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <p className="text-white font-medium">{alt}</p>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const galleryImages: GalleryImageProps[] = [
    {
      src: "https://ext.same-assets.com/3240598011/3296403731.jpeg",
      alt: "Happy Golden Retriever",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/3240598011/2151163992.jpeg",
      alt: "Grooming Van",
      category: "Equipment"
    },
    {
      src: "https://ext.same-assets.com/1447787703/2790229527.jpeg",
      alt: "Poodle Transformation",
      category: "Before & After"
    },
    {
      src: "https://ext.same-assets.com/1447787703/862973313.jpeg",
      alt: "Shih Tzu with Bow",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/1447787703/2384014787.jpeg",
      alt: "Yorkie with Fresh Cut",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/1447787703/745090441.jpeg",
      alt: "Freshly Groomed Puppy",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/1447787703/1996140612.jpeg",
      alt: "German Shepherd Bath",
      category: "During Grooming"
    },
    {
      src: "https://ext.same-assets.com/1447787703/1288323536.jpeg",
      alt: "Maltese with Haircut",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/1850589225/3213376096.jpeg",
      alt: "Happy Clients",
      category: "Customer Photos"
    },
    {
      src: "https://ext.same-assets.com/1447787703/1610377855.jpeg",
      alt: "Collie After Grooming",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/1447787703/1875706495.jpeg",
      alt: "Pomeranian Haircut",
      category: "After Grooming"
    },
    {
      src: "https://ext.same-assets.com/1447787703/805819581.jpeg",
      alt: "Corgi Bath Time",
      category: "During Grooming"
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-light-blue py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-pacifico text-white">Our Gallery</h1>
            <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
              See the amazing transformations of our happy furry clients
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-pacifico text-[#46aebe] mb-4">Our Grooming Showcase</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse through our gallery to see examples of our professional pet grooming services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <GalleryImage
                  key={`${image.src}-${index}`}
                  src={image.src}
                  alt={image.alt}
                  category={image.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
