import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("필수 입력사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("필수 입력사항입니다."),
  name: yup
    .string()
    .min(1, "최소 한자리 이상을 입력해주세요.")
    .required("필수 입력사항입니다."),
});
