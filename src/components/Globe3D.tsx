// components/Globe3D.tsx
"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// Dynamically import without SSR to prevent hydration errors
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const Globe3D = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.2;
    }
  }, []);

  return (
    <div className="w-full h-[300px]">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={true}
        showAtmosphere={true}
        width={300}
        height={300}
      />
    </div>
  );
};

export default Globe3D;
