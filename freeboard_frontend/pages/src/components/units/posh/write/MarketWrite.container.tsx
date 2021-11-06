export default function MarketWrite() {
  return (
    <>
      <div
        style={{
          width: 1200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 50,
          backgroundColor: "lemonchiffon",
        }}
      >
        <div>상품등록페이지</div>
        <div>
          {new Array(5).fill(1).map((el) => (
            <button>+</button>
          ))}
        </div>
        <div>
          {new Array(5).fill(1).map((el) => (
            <button>+</button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>상품명*</label>
          <input placeholder="상품명을 입력해주세요" />
          <label>가격*</label>
          <input placeholder="가격을 입력해주세요" />
          <label>상세설명*</label>
          <input
            placeholder="상품 상세 설명을 입력해주세요
      ex. 사이즈, 색상 등"
          />
          <label>거래장소*</label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input placeholder="02810" />
              <button>우편번호검색</button>
            </div>
            <input />
            <input />
          </div>
        </div>
        <button>등록하기</button>
        <button>수정하기</button>
      </div>
      <div
        style={{
          width: 1200,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/images/home.png" />
          <div>홈</div>
        </div>
        <div>
          <img src="/images/mysearch.png" />
          <div>검색</div>
        </div>
        <div>
          <img src="/images/write.png" />
          <div>등록</div>
        </div>
        <div>
          <img src="/images/chat.png" />
          <div>채팅</div>
        </div>
        <div>
          <img src="/images/mypage.png" />
          <div>마이마켓</div>
        </div>
      </div>
    </>
  );
}
