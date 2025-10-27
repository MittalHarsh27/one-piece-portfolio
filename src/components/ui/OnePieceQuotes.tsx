"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import StrawHatIcon from "./StrawHatIcon";

/**
 * One Piece Quotes Component
 * Displays inspirational quotes from One Piece characters
 */

export const ONE_PIECE_QUOTES = [
  {
    quote: "I don't want to conquer anything. I just think the guy with the most freedom in this entire ocean is the Pirate King!",
    character: "Monkey D. Luffy",
    context: "freedom"
  },
  {
    quote: "Power isn't determined by your size, but the size of your heart and dreams!",
    character: "Monkey D. Luffy",
    context: "determination"
  },
  {
    quote: "If you don't take risks, you can't create a future!",
    character: "Monkey D. Luffy",
    context: "courage"
  },
  {
    quote: "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It's when... they are forgotten.",
    character: "Dr. Hiluluk",
    context: "legacy"
  },
  {
    quote: "Being alone is more painful than getting hurt.",
    character: "Monkey D. Luffy",
    context: "friendship"
  },
  {
    quote: "I don't care what the society says. I've never regretted doing anything for my friends.",
    character: "Roronoa Zoro",
    context: "loyalty"
  },
  {
    quote: "Scars on the back are a swordsman's shame.",
    character: "Roronoa Zoro",
    context: "honor"
  },
  {
    quote: "Forgetting is like a wound. The wound may heal but it has already left a scar.",
    character: "Monkey D. Luffy",
    context: "memory"
  },
  {
    quote: "I want to live!",
    character: "Nico Robin",
    context: "hope"
  },
  {
    quote: "Miracles only happen to those who never give up.",
    character: "Usopp",
    context: "perseverance"
  },
  {
    quote: "The world isn't perfect, but it's there for us trying the best it can. That's what makes it so beautiful.",
    character: "Roy Mustang",
    context: "acceptance"
  },
  {
    quote: "When the world shoves you around, you just gotta stand up and shove back. It's not like somebody's gonna save you if you start babbling excuses.",
    character: "Roronoa Zoro",
    context: "resilience"
  },
];

interface OnePieceQuotesProps {
  showCharacter?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

export default function OnePieceQuotes({
  showCharacter = true,
  autoRotate = false,
  rotationInterval = 10000,
  className = ""
}: OnePieceQuotesProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(
    Math.floor(Math.random() * ONE_PIECE_QUOTES.length)
  );

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % ONE_PIECE_QUOTES.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval]);

  const currentQuote = ONE_PIECE_QUOTES[currentQuoteIndex];

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-treasure-gold flex-shrink-0 opacity-50" />
            <div className="flex-1">
              <blockquote className="text-neutral-700 dark:text-neutral-300 italic mb-2">
                &ldquo;{currentQuote.quote}&rdquo;
              </blockquote>
              {showCharacter && (
                <div className="flex items-center gap-2">
                  <StrawHatIcon size="sm" className="text-treasure-gold" />
                  <cite className="text-sm font-medium text-neutral-600 dark:text-neutral-400 not-italic">
                    — {currentQuote.character}
                  </cite>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * Random Quote Hook
 * Returns a random quote from the collection
 */
export function useRandomQuote() {
  const [quote] = useState(() => 
    ONE_PIECE_QUOTES[Math.floor(Math.random() * ONE_PIECE_QUOTES.length)]
  );
  return quote;
}

/**
 * Easter Egg Component
 * Hidden One Piece references throughout the site
 */
export function OnePieceEasterEgg() {
  const [discovered, setDiscovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount >= 5 && !discovered) {
      setDiscovered(true);
    }
  }, [clickCount, discovered]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={() => setClickCount((prev) => prev + 1)}
        className="w-12 h-12 rounded-full bg-treasure-gold/20 hover:bg-treasure-gold/40 backdrop-blur-md border border-treasure-gold/30 flex items-center justify-center transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Click me 5 times!"
      >
        <StrawHatIcon size="md" className="text-treasure-gold" />
      </motion.button>

      <AnimatePresence>
        {discovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-64 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl"
          >
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <StrawHatIcon size="lg" className="text-treasure-gold" />
              </div>
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100">
                You found the treasure!
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                &ldquo;The One Piece is real!&rdquo; - Whitebeard
              </p>
              <button
                onClick={() => setDiscovered(false)}
                className="text-xs text-treasure-gold hover:underline"
              >
                Hide treasure
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

