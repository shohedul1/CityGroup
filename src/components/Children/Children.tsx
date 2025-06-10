"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


interface LayoutProps {
    children: React.ReactNode;
}

const Children = ({ children }: LayoutProps) => {
    useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

    return (
        <div>
            {children}
        </div>
    )
}

export default Children