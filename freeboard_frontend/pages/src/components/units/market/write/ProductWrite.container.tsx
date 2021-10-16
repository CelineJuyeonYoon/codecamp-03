import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./ProductWrite.queries";
import { schema } from "./ProductWrite.validation";
import { useState } from "react";

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [files, setFiles] = useState(["", "", "", ""]);

  async function onClickSubmit(data) {
    const uploadFiles = files
      .filter((el) => el)
      .map((el) =>
        uploadFile({
          variables: {
            file: el,
          },
        })
      );
    const results = await Promise.all(uploadFiles);
    const images = results.map((el) => el.data.uploadFile.url);

    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          images: images,
        },
      },
    });
    console.log(result.data?.createUseditem._id);
    router.push(`/market/${result.data.createUseditem._id}`);
  }

  function onChangeEditor(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <ProductWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
      onChangeEditor={onChangeEditor}
      files={files}
      onChangeFiles={onChangeFiles}
    />
  );
}
