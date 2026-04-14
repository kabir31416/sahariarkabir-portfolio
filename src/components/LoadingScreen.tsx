import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const lines = [
  "initializing modules...",
  "loading components...",
  "compiling assets...",
  "ready.",
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        const next = prev + Math.random() * 15 + 5;
        setLineIdx(Math.min(Math.floor((next / 100) * lines.length), lines.length - 1));
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading gradient-text mb-6 font-mono"
          >
            &lt;Dev /&gt;
          </motion.div>

          <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--gradient-primary)", width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.p
            key={lineIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground tracking-wider font-mono"
          >
            <span className="text-primary">$</span> {lines[lineIdx]}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
