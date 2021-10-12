import { useState, useEffect } from "react";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItems(items);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
        </div>
      ))}
    </>
  );
}
