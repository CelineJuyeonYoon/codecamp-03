import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  return (
    <>
      {/* <FunctionalComponentUI count={123} school="다람쥐초등학교" /> */}
      {FunctionalComponentUI({ count: 123, school: "다람쥐초등학교" })}
    </>
  );
}
