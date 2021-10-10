import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      picture
    }
  }
`;

const Input = styled.input``;
const Button = styled.button``;

export default function SignInPage() {
  const [createUser] = useMutation(CREATE_USER);
  const { handleSubmit, register } = useForm();

  function onClickSignIn(data) {
    // register에 등록된 data들이 들어옴
    console.log(data);
    createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onClickSignIn)}>
      이메일<Input type="text" {...register("email")}></Input>
      비밀번호<Input type="password" {...register("password")}></Input>
      이름<Input type="text" {...register("name")}></Input>
      <Button type="submit">회원가입하기</Button>
    </form>
  );
}
