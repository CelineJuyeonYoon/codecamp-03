import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/22-context-api/MyBoardWrite.container";

export const MyContext = createContext(null); // 초기값 null 로 지정
export default function ContextAPIPage() {
  const value = {
    isEdit: false,
  };

  return (
    <MyContext.Provider value={value}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
}
