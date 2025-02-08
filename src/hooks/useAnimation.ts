// filepath: /consulting-website/src/hooks/useAnimation.ts
import { useEffect, useRef } from 'react';

const useAnimation = (animationClass: string) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.classList.add(animationClass);
      return () => {
        element.classList.remove(animationClass);
      };
    }
  }, [animationClass]);

  return elementRef;
};

export default useAnimation;