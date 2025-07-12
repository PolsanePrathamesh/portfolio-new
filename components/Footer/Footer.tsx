"use client";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-black text-white !py-20 border-t border-gray-800 ">
      <div className=" mx-auto text-center">
        <div className="space-y-4">
          {/* Main Content */}
          <p className="text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with Next.js, React Bits and Aceternity UI
          </p>
        </div>
      </div>
    </footer>
  );
}
