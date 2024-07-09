
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('canvas-confetti').then((confetti) => {
        confetti.default({
          particleCount: 1000,
          spread: 700,
          origin: { y: 0.6 }
        });
      });
    }
  }, []);
};

