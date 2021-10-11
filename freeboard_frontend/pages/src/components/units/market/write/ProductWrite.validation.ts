import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("필수 입력사항입니다."),
  remarks: yup.string().required("필수 입력사항입니다."),
  contents: yup
    .string()
    .max(200, "최대 200자까지 입력할 수 있습니다.")
    .required("필수 입력사항입니다."),
  price: yup
    .string()
    .min(0, "올바른 금액을 입력해주세요.")
    .required("필수 입력사항입니다."),
});
