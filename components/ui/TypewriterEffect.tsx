'use client';

import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export function TypewriterEffect({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPaused, setTypingPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentTextIndex];
    
    if (!typingPaused) {
      if (!isDeleting && displayedText.length === currentText.length) {
        // Pause at the end of typing
        setTypingPaused(true);
        setTimeout(() => {
          if (texts.length > 1) {
            setIsDeleting(true);
          }
          setTypingPaused(false);
        }, delayBetweenTexts);
        return;
      }

      if (isDeleting && displayedText.length === 0) {
        // Move to next text after deletion
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        return;
      }

      const timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting, currentTextIndex, typingPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <div className={`inline-block ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
