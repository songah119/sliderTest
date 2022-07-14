import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

function SlideController(props) {
  const { position } = props; //현재 슬라이드의 위치(숫자)
  const [slideNum, setSlideNum] = useState(position);

  useEffect(() => {
    //props 바뀔때마다 set해줘야 리렌더링 가능
    setSlideNum(position);
  }, [position]);

  return (
    <StControllerWrapper>
      <div
        className={slideNum === 1 ? "isactive" : "unactive"}
        onClick={() => setSlideNum(1)}
      >
        <p>red</p>
      </div>
      <div
        className={slideNum === 2 ? "isactive" : "unactive"}
        onClick={() => setSlideNum(2)}
      >
        <p>yellow</p>
      </div>
      <div
        className={slideNum === 3 ? "isactive" : "unactive"}
        onClick={() => setSlideNum(3)}
      >
        <p>green</p>
      </div>
      <div
        className={slideNum === 4 ? "isactive" : "unactive"}
        onClick={() => setSlideNum(4)}
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
