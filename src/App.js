import styled from "styled-components";
import SlideController from "./StController";
import { useState, useEffect, useRef } from "react";
import { useThemeObserver } from "./useThemeObserver";

function App() {
  const [slideNumber, setSlideNumber] = useState(1);

  const firstSlideRef = useThemeObserver(setSlideNumber, 1);
  const secondSlideRef = useThemeObserver(setSlideNumber, 2);
  const thirdSlideRef = useThemeObserver(setSlideNumber, 3);
  const fourthSlideRef = useThemeObserver(setSlideNumber, 4);

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
