// useThemeObserver.ts
import { useEffect, useRef } from "react";

export const useThemeObserver = (setState, stateNumber) => {
  const isRef = useRef(null);

  const observePoint = (entries, observer) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        //props로 받은 슬라이드가 intersecting될 때
        setState(stateNumber);
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (isRef.current) {
      observer = new IntersectionObserver(observePoint, {
        threshold: 0.4,
      });
      observer.observe(isRef.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return isRef;
};
