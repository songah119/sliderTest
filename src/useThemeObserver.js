// useThemeObserver.ts
import { useEffect, useRef } from "react";

export const useThemeObserver = (setState, stateNumber) => {
  const isRef = useRef(null);
  const option = {
    rootMargin: "500px",
    threshold: 1,
  };

  const callback = (entry) => {
    if (entry[0].isIntersecting) {
      setState(stateNumber);
    }
  };

  useEffect(() => {
    let observer;
    if (isRef.current) {
      observer = new IntersectionObserver(callback, option);
      observer.observe(isRef.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return [isRef];
};
