export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=철수";
  }

  function onClickSaveLocalStorage() {
    localStorage.setItem("이름", "영희");
  }

  function onClickSaveSessionStorage() {
    sessionStorage.setItem("name", "hoony");
  }

  function onClickGetCookie() {
    console.log("쿠키", document.cookie);

    const temp = document.cookie // temp = "aaa=철수"
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0];
    console.log(temp.split("=")[1]);
  }

  function onClickGetLocalStorage() {
    const local = localStorage.getItem("이름");
    console.log("로컬", local);
  }

  function onClickGetSessionStorage() {
    const session = sessionStorage.getItem("name");
    console.log("session", session);
  }

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSaveSessionStorage}>
        세션스토리지에 저장하기
      </button>
      ====================================================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
