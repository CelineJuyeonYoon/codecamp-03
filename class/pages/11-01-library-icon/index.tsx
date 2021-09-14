import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import "antd/dist/antd.css";

const MyIcon = styled(PlayCircleOutlined)`
  font-size: 50px;
  color: green;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
