import styled from "styled-components";
import SlideController from "./StController";
import { useState, useEffect, useRef } from "react";
// import { useThemeObserver } from "./useThemeObserver";

function App() {
  const [slideNumber, setSlideNumber] = useState(1);
  const firstSlideRef = useRef(null);
  const secondSlideRef = useRef();
  const thirdSlideRef = useRef(null);
  const fourthSlideRef = useRef(null);

  // const [firstSlideRef] = useThemeObserver(setSlideNumber, 1);
  // const [secondSlideRef] = useThemeObserver(setSlideNumber, 2);
  // const [thirdSlideRef] = useThemeObserver(setSlideNumber, 3);
  // const [fourthSlideRef] = useThemeObserver(setSlideNumber, 4);

  const callBB = (entries, observer) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        //지정해준 entry=>2번째 슬라이드 가 intersecting될 때
        setSlideNumber(2);
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (secondSlideRef.current) {
      observer = new IntersectionObserver(callBB, {
        threshold: 0.4,
      });
      observer.observe(secondSlideRef.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return (
    <StContainer>
      <SlideController position={slideNumber} />
      <StSlidediv className="first-slide" ref={firstSlideRef}>
        <p>first</p>
      </StSlidediv>
      <StSlidediv className="second-slide" ref={secondSlideRef}>
        <p>second</p>
      </StSlidediv>
      <StSlidediv className="third-slide" ref={thirdSlideRef}>
        <p>third</p>
      </StSlidediv>
      <StSlidediv className="fourth-slide" ref={fourthSlideRef}>
        <p>fourth</p>
      </StSlidediv>
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  width: 100%;
`;

const StSlidediv = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  &.first-slide {
    background-color: red;
  }

  &.second-slide {
    background-color: yellow;
  }

  &.third-slide {
    background-color: green;
  }

  &.fourth-slide {
    background-color: blue;
  }
`;
