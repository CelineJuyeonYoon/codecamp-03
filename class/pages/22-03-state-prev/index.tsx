import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((ccc) => {
      // let aaa = "로직아무거나";

      return ccc + 1;
    });

    // setCount((ccc) => {
    //   let aaa = "로직아무거나";

    //   return ccc + 1;
    // });
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
