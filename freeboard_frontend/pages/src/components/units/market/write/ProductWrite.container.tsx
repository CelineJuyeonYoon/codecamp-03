import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM,
  UPLOAD_FILE,
  UPDATE_USEDITEM,
} from "./ProductWrite.queries";
import { schema } from "./ProductWrite.validation";
import { useState, useEffect } from "react";
import { FETCH_USEDITEM } from "../detail/ProductDetail.queries";

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [files, setFiles] = useState(["", "", "", ""]);
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.productid,
    },
  });

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

  // useEffect(() => {
  //   if (props.isEdit && props.data?.fetchUseditem) {
  //     setValue("name", props.data?.fetchUseditem?.name);
  //     setValue("remarks", props.data?.fetchUseditem?.remarks);
  //     // setValue("contents", props.data?.fetchUseditem?.contents);
  //     setValue("price", props.data?.fetchUseditem?.price);
  //     setValue("tags", props.data?.fetchUseditem?.tags);
  //   }
  // }, [props?.isEdit, props.data?.fetchUseditem]);

  async function onClickEdit(Data) {
    const myUpdate = {};
    if (Data.name) myUpdate.name = Data.name;
    if (Data.remarks) myUpdate.remarks = Data.remarks;
    if (Data.contents) myUpdate.contents = Data.contents;
    if (Data.price) myUpdate.price = Number(Data.price);
    if (Data.tags) myUpdate.tags = Data.tags;
    if (Data.images) myUpdate.images = Data.images;

    await updateUseditem({
      variables: {
        useditemId: router.query.productid,
        updateUseditemInput: myUpdate,
      },
    });
    router.push(`/market/${router.query.productid}`);
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
      onClickEdit={onClickEdit}
      data={data}
    />
  );
}
