import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0%;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "myfont"; // 폰트이름
    src: url("/fonts/scifibit.ttf");
  }
`;
