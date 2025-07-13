"use client";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-black text-white !py-20 border-t border-gray-800 z-10 relative ">
      <div className=" mx-auto text-center">
        <div className="space-y-4">
          {/* Main Content */}
          <p className="text-sm">
            © {currentYear} Prathamesh Polsane. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with Three.js, GSAP, Framer Motion, Tailwind CSS, TypeScript,
            Next.js, React Bits and Aceternity UI
          </p>
        </div>
      </div>
    </footer>
  );
}
