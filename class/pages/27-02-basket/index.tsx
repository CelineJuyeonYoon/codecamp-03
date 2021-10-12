import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || []; // JSON.parse로 문자열 -> 객체로

    // 이미 담았는지 체크!!
    let isExists = false; // 스위치 변수
    baskets.forEach((basketEl) => {
      console.log(el._id);
      console.log(basketEl._id);
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다!");
      return;
    }

    baskets.push(el);
    // console.log("담기: ", el);
    localStorage.setItem("baskets", JSON.stringify(baskets)); // 그냥 el로 하면 object Object라는 string만 들어감
  };

  function onClickLogin() {
    alert("로그인에 성공하였습니다!");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다! 장바구니 페이지로 이동할까요?"
      );
      if (result) router.push("27-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
