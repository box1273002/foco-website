"use client";

import React, { useEffect, useState } from "react";
import { Testimonials } from "@/components/Testimonials";

export default function AnimatedTestimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Short delay to ensure animation happens after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
    >
      <Testimonials />
    </div>
  );
} 