import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount(count + 1);
    setCount((prev) => prev + 1); // 임시저장공간에 있는 거 or 이전의 값 먼저 가져와
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}
