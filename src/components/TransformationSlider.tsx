"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Need to define the img-comparison-slider element type with proper attributes
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'img-comparison-slider': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          hover?: boolean;
          value?: string | number;
          direction?: 'horizontal' | 'vertical';
          keyboard?: 'enabled' | 'disabled';
          handle?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

interface TransformationSliderProps {
  beforeImage: string;
  afterImage: string;
  altText?: string;
  // For combined images, we need to know if they are side-by-side (horizontal) or stacked (vertical)
  isCombinedImage?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export const TransformationSlider = ({
  beforeImage,
  afterImage,
  altText = "Dog grooming transformation",
  isCombinedImage = true,
  orientation = 'horizontal'
}: TransformationSliderProps) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // This component uses client-side only features, so we need to ensure
  // it only renders after mounting
  useEffect(() => {
    // Import the library dynamically only on the client
    import('img-comparison-slider');

    setMounted(true);

    // Dynamically import the style sheet needed for the slider
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css';
    document.head.appendChild(link);

    // Add custom CSS for image positioning
    const style = document.createElement('style');
    style.textContent = `
      .img-before-horizontal {
        object-position: left center;
      }
      .img-after-horizontal {
        object-position: right center;
      }
      .img-before-vertical {
        object-position: center top;
      }
      .img-after-vertical {
        object-position: center bottom;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  if (!mounted) {
    // Return a placeholder while the component is not yet mounted
    return (
      <div className="relative w-full aspect-square max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-gray-400 text-xl">Loading transformation slider...</div>
      </div>
    );
  }

  // Determine CSS classes based on combined image and orientation
  const beforeClass = isCombinedImage
    ? orientation === 'horizontal'
      ? 'img-before-horizontal'
      : 'img-before-vertical'
    : '';

  const afterClass = isCombinedImage
    ? orientation === 'horizontal'
      ? 'img-after-horizontal'
      : 'img-after-vertical'
    : '';

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img-comparison-slider className="w-full h-full" hover value={50}>
        <div slot="first" className="relative w-full h-full">
          <img
            src={beforeImage}
            alt={`Before ${altText}`}
            className={`w-full h-full object-cover ${beforeClass}`}
          />
          <span className="absolute top-4 left-4 bg-[#46aebe] text-white font-bold py-1 px-3 rounded-full text-sm">Before</span>
        </div>
        <div slot="second" className="relative w-full h-full">
          <img
            src={afterImage}
            alt={`After ${altText}`}
            className={`w-full h-full object-cover ${afterClass}`}
          />
          <span className="absolute top-4 right-4 bg-[#f9a280] text-white font-bold py-1 px-3 rounded-full text-sm">After</span>
        </div>
      </img-comparison-slider>
    </div>
  );
};
