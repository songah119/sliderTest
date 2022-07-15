import styled from "styled-components";
import { useState, useEffect } from "react";

function SlideController(props) {
  const { slideNumber, setSlideNumber } = props; //현재 슬라이드의 위치(숫자)

  useEffect(() => {
    //props 바뀔때마다 set해줘야 리렌더링 가능
    setSlideNumber(slideNumber);
  }, [slideNumber]);

  // useEffect(() => {
  //   useMoveScroll();
  // }, [slideNumber]);

  return (
    <StControllerWrapper>
      <div
        className={slideNumber === 1 ? "isactive" : "unactive"}
        onClick={() => setSlideNumber(1)}
      >
        <p>red</p>
      </div>
      <div
        className={slideNumber === 2 ? "isactive" : "unactive"}
        onClick={() => setSlideNumber(2)}
      >
        <p>yellow</p>
      </div>
      <div
        className={slideNumber === 3 ? "isactive" : "unactive"}
        onClick={() => setSlideNumber(3)}
      >
        <p>green</p>
      </div>
      <div
        className={slideNumber === 4 ? "isactive" : "unactive"}
        onClick={() => setSlideNumber(4)}
      >
        <p>blue</p>
      </div>
    </StControllerWrapper>
  );
}

export default SlideController;

const StControllerWrapper = styled.section`
  display: flex;
  position: fixed;
  gap: 4px;

  & > div {
    display: flex;
    justify-content: center;

    width: 50px;
    height: 50px;

    border-radius: 50%;
    cursor: pointer;
  }

  .isactive {
    background-color: white;
  }

  .unactive {
    background-color: gray;
  }
`;
