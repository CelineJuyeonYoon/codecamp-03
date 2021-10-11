import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./ProductWrite.queries";
import { schema } from "./ProductWrite.validation";

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onClickSubmit(data) {
    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
        },
      },
    });
    console.log(result.data?.createUseditem._id);
    router.push("./detail");
  }
  return (
    <ProductWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
    />
  );
}
