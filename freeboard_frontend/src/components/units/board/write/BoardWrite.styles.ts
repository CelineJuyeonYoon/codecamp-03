import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px;
  padding-top: 90px;
  padding-bottom: 100px;
  margin: 100px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 996px;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
  margin-left: 1px;
  font-weight: 500;
`;

export const Check = styled.span`
  color: #ffd600;
`;

export const WriterInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  padding-left: 15px;
  font-size: 16px;
`;

export const Input = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  padding-left: 15px;
  font-size: 16px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 480px;
  padding-top: 16px;
  padding-left: 15px;
  font-size: 16px;
`;

export const AddressWrapper = styled.div`
  height: 244px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding-top: 16px;
`;

export const ZipcodeWrapper = styled.div`
  width: 217px;
  display: flex;
  justify-content: space-between;
`;

export const Zipcode = styled.input`
  border: 1px solid #bdbdbd;
  width: 77px;
  height: 52px;
  padding-left: 15px;
  font-size: 16px;
`;

export const ZipcodeBtn = styled.button`
  background-color: black;
  width: 124px;
  height: 52px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
export const Address = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  padding-left: 15px;
  font-size: 16px;
  margin-top: 16px;
`;

export const AddWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const AddBoxWrapper = styled.div`
  display: flex;
  width: 282px;
  justify-content: space-between;
`;

export const AddBox = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #4f4f4f;
  cursor: pointer;
  border: none;
`;

export const Vector = styled.img`
  margin-bottom: 5px;
`;

export const SelectWrapper = styled.div`
  padding-top: 40px;
  width: 996px;
`;

export const RadioWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  width: 15px;
  height: 15px;
  background: #ffffff;
  border: 1px solid #ffd600;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 10px;
  margin-right: 22px;
  padding-top: 2px;
  font-size: 16px;
  font-weight: 500;
  /* padding-bottom: 1px; */
`;

export const ButtonWrapper = styled.div`
  width: 382px;
  /* width: 1200px; */
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const CancelBtn = styled.button`
  background-color: #bdbdbd;
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border-color: #ffd600;
  }
`;

export const SubmitBtn = styled.button<{buttonAct?: boolean}>`
  background-color: ${(props) =>
    props.buttonAct === true ? "#FFD600" : "#BDBDBD"};
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border-color: #ffd600;
  }
`;

export const EditBtn = styled.button<{buttonAct: any}>`
  background-color: ${(props) =>
    props.buttonAct === true ? "#FFD600" : "#BDBDBD"};
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border-color: #ffd600;
  }
`;

export const NameErr = styled.div`
  color: red;
  margin-top: 3px;
  margin-left: 1px;
`;

export const PasswordErr = styled.div`
  color: red;
  margin-top: 3px;
  margin-left: 1px;
`;

export const TitleErr = styled.div`
  color: red;
  margin-top: 3px;
  margin-left: 1px;
`;

export const ContentErr = styled.div`
  color: red;
  margin-top: 3px;
  margin-left: 1px;
`;
