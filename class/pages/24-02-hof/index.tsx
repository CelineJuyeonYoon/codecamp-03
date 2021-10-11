export default function HofPage() {
  function onClickFunction(event) {
    alert(`${event.target.id}번째 입니다.`);
  }

  const onClickFunction2 = (index) => (event) => {
    alert(`${index}번째 입니다.`);
  }; // index와 event를 둘 다 함수 내에서 사용할 수 있다.
  // Return에 jsx 없으면 하이어 오더 펑션 <-> 하이어 오더 컴포넌트

  return (
    <>
      <div>HOF 연습 페이지입니다.</div>
      {["철수", "영희", "훈이"].map((el, index) => (
        // <div id={String(index)} onClick={onClickFunction}>{el}입니다.</div>
        <div onClick={onClickFunction2(index)}>{el}입니다.</div>
      ))}
    </>
  );
}
