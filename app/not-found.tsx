'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Terminal, Server, Code2, Cpu, WifiOff, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const errorMessages = [
  '404: Page Not Found',
  'Error 404: Resource Unavailable',
  'HTTP 404: Lost in Cyberspace',
  '404: Digital Black Hole Detected',
  'Error: Route Not Found',
];

const techTerms = [
  '404: DNS Resolution Failed',
  'Connection Timeout',
  'Endpoint Not Found',
  'Invalid Route',
  'Resource Not Found',
  '404: API Endpoint Missing',
];

export default function NotFound() {
  const [errorMessage, setErrorMessage] = useState(errorMessages[0]);
  const [techTerm, setTechTerm] = useState(techTerms[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
      const randomTerm = techTerms[Math.floor(Math.random() * techTerms.length)];
      setErrorMessage(randomError);
      setTechTerm(randomTerm);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 text-center overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-8 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-2xl">
        {/* Animated error code */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-600/20 rounded-2xl opacity-75 blur-2xl -z-10" />
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Terminal className="w-12 h-12 text-gray-300" />
              <Server className="w-12 h-12 text-white" />
              <Code2 className="w-12 h-12 text-gray-400" />
            </div>
            
            <motion.h1 
              key={errorMessage}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4"
            >
              404
            </motion.h1>
            
            <motion.h2 
              key={techTerm}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl md:text-3xl font-mono text-gray-300 mb-2"
            >
              {techTerm}
            </motion.h2>
            
            <p className="text-gray-400 mb-8">
              The requested resource could not be located on this server.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-white/90 to-gray-300 hover:from-white hover:to-gray-400 text-gray-900 shadow-lg"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Return to Home
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  asChild
                >
                  <a href="#" onClick={() => window.history.back()} className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Debug info */}
        <div className="text-left text-sm text-gray-500 mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-gray-300" />
            <span>Debug Information:</span>
          </div>
          <div className="space-y-1">
            <p>• Status: <span className="text-gray-300">404 Not Found</span></p>
            <p>• Path: <span className="text-gray-400">{typeof window !== 'undefined' ? window.location.pathname : ''}</span></p>
            <p>• Request ID: <span className="text-gray-300">{Math.random().toString(36).substring(2, 10)}</span></p>
            <div className="flex items-center gap-2">
              <WifiOff className="w-4 h-4 text-yellow-400" />
              <span>Connection: <span className="text-green-400">Secure</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
