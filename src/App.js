import styled from "styled-components";
import SlideController from "./StController";
import { useState, useEffect, useRef } from "react";
import { useThemeObserver } from "./useThemeObserver";
// import { useMoveScroll } from "./useMoveScroll";

function App() {
  const [slideNumber, setSlideNumber] = useState(1);

  const firstSlideRef = useThemeObserver(setSlideNumber, 1);
  const secondSlideRef = useThemeObserver(setSlideNumber, 2);
  const thirdSlideRef = useThemeObserver(setSlideNumber, 3);
  const fourthSlideRef = useThemeObserver(setSlideNumber, 4);

  ///와!!!!!!!!!!!! 이슈 발생 올라가다가 observer때매 두칸씩 못올라감
  useEffect(() => {
    console.log("slideNumber", slideNumber);
  }, [slideNumber]);

  useEffect(() => {
    //slideNumber가 변경 될 때 마다 스크롤 옮겨주기
    moveToElement(slideNumber);
  }, [slideNumber]);

  const moveToElement = (slideNumber) => {
    let clickedSlideNum = slideNumber;
    let clickedSlideRef;
    if (clickedSlideNum === 1) {
      clickedSlideRef = firstSlideRef;
    } else if (clickedSlideNum === 2) {
      clickedSlideRef = secondSlideRef;
    } else if (clickedSlideNum === 3) {
      clickedSlideRef = thirdSlideRef;
    } else if (clickedSlideNum === 4) {
      clickedSlideRef = fourthSlideRef;
    }
    clickedSlideRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <StContainer>
      <SlideController
        slideNumber={slideNumber}
        setSlideNumber={setSlideNumber}
      />
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
