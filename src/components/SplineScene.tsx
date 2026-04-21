import { Suspense, lazy, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center ${className ?? ""}`}>
        <div className="h-12 w-12 rounded-full border-4 border-brand-gold/30 border-t-brand-gold animate-spin" />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={`flex items-center justify-center ${className ?? ""}`}>
          <div className="h-12 w-12 rounded-full border-4 border-brand-gold/30 border-t-brand-gold animate-spin" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
