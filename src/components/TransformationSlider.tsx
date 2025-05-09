"use client";

import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "img-comparison-slider": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          hover?: boolean;
          value?: string | number;
          direction?: "horizontal" | "vertical";
          keyboard?: "enabled" | "disabled";
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
  isCombinedImage?: boolean;
  orientation?: "horizontal" | "vertical";
}

export const TransformationSlider = ({
  beforeImage,
  afterImage,
  altText = "Dog grooming transformation",
  isCombinedImage = true,
  orientation = "horizontal",
}: TransformationSliderProps) => {
  const [mounted, setMounted] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    import("img-comparison-slider");
    setMounted(true);

    setSupportsHover(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      img-comparison-slider {
        touch-action: none !important;
        width: 100% !important;
        height: 100% !important;
        display: block !important;
        --handle-size: 24px;
      }

      .img-before-horizontal { object-position: left center; }
      .img-after-horizontal  { object-position: right center; }
      .img-before-vertical   { object-position: center top; }
      .img-after-vertical    { object-position: center bottom; }

      .ics-label { pointer-events: none; user-select: none; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[90vw] sm:max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-gray-400 text-sm sm:text-xl">
          Loading transformation slider…
        </div>
      </div>
    );
  }

  const beforeClass =
    isCombinedImage && orientation === "horizontal"
      ? "img-before-horizontal"
      : isCombinedImage && orientation === "vertical"
      ? "img-before-vertical"
      : "";

  const afterClass =
    isCombinedImage && orientation === "horizontal"
      ? "img-after-horizontal"
      : isCombinedImage && orientation === "vertical"
      ? "img-after-vertical"
      : "";

  const sliderProps: Record<string, unknown> = {
    class: "w-full h-full block",
    value: 50,
  };
  if (supportsHover) sliderProps.hover = true;

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[90vw] sm:max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg touch-none">
      {/* @ts-ignore */}
      <img-comparison-slider {...sliderProps}>
        <div slot="first" className="relative w-full h-full">
          <img
            src={beforeImage}
            alt={`Before ${altText}`}
            className={`w-full h-full object-cover ${beforeClass}`}
            draggable={false}
          />
          <span className="ics-label absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#46aebe] text-white font-bold py-0.5 sm:py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">
            Before
          </span>
        </div>

        <div slot="second" className="relative w-full h-full">
          <img
            src={afterImage}
            alt={`After ${altText}`}
            className={`w-full h-full object-cover ${afterClass}`}
            draggable={false}
          />
          <span className="ics-label absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#f9a280] text-white font-bold py-0.5 sm:py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">
            After
          </span>
        </div>
      </img-comparison-slider>
    </div>
  );
};
