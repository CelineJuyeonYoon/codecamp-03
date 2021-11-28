import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyformUI from "./Myform.presenter";
import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from "./Myform.queries";
import { schema } from "./Myform.validataion";
import { useContext } from "react";
import { GlobalContext } from "../../../../_app";
import { useRouter } from "next/router";

export default function Myform(props) {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [createUser] = useMutation(CREATE_USER);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const client = useApolloClient();

  function onClickSignup(data) {
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
    router.push("/login");
  }

  return (
    <MyformUI
      onClickSignup={onClickSignup}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
