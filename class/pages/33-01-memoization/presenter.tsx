import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 되었습니다.");

  return (
    <>
      <div>=================</div>
      <div>이것은 프리젠터 입니다.</div>
      <div>=================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
// 부모가 렌더되어도 같이 렌더되지 말기. 이대로 기록
