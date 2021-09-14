import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>
      <Modal visible={isModalVisible} onCancel={closeModal}>
        비밀번호 입력: <input type="password" onChange={onChangeMyPassword} />
      </Modal>
    </>
  );
}
