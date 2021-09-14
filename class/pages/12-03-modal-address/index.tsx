import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function ModalAddressPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyAddress(data.address);
    setMyZipcode(data.zonecode);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen(false);
  };
  function onOpenZipcode() {
    setIsOpen(true);
  }
  function onCloseZipcode() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={onOpenZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onCloseZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
