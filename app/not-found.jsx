"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-3">Wrong turn?</h1>

        <p className="text-gray-600 mb-6">
          This page isn’t available, but your dream space still is. Let’s get
          you back on track.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-5 py-2 bg-black text-white rounded-lg hover:opacity-90"
            aria-label="Go back to BhuviHomes homepage"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            aria-label="View BhuviHomes projects in Jharkhand"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
