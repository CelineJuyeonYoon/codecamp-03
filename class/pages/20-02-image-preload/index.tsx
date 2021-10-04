import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imageTag, setImageTag] = useState();
  const divRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"; // <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />
    img.onload = () => {
      setImageTag(img); // loading 끝나면 imageTag에 저장
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(imageTag); // 태그 안에 자식으로 들어감
  }

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
