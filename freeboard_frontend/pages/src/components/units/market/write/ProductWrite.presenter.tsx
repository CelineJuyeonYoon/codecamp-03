import Input02 from "../../../commons/inputs/02/input02";
import Button02 from "../../../commons/buttons/02/button02";
import { Wrapper, Title, ImgAttach } from "./ProductWrite.styles";
import Map01 from "../../../commons/maps/01/map01";
import UploadImage01 from "../../../commons/uploadImages/01/uploadImage01";
import Radio01 from "../../../commons/radios/01/radio01";
import Editor01 from "../../../commons/editors/01/editor01";

export default function ProductWriteUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <Wrapper>
        <Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
        <Input02
          name="상품명"
          type="text"
          register={props.register("name")}
          error={props.formState.errors.name?.message}
          defaultValue={props.data?.fetchUseditem.name}
          value={props.data?.fetchUseditem.name}
        />
        <Input02
          name="한줄요약"
          type="text"
          register={props.register("remarks")}
          error={props.formState.errors.remarks?.message}
          defaultValue={props.data?.fetchUseditem.remarks}
        />
        <Editor01
          onChange={props.onChangeEditor}
          name="상품설명"
          defaultValue={props.data?.fetchUseditem.contents}
          contents={props.contents}
          // type="text"
          // register={props.register("contents")}
          // error={props.formState.errors.contents?.message}
        />
        <Input02
          name="판매가격"
          type="text"
          register={props.register("price")}
          error={props.formState.errors.price?.message}
          defaultValue={props.data?.fetchUseditem.price}
        />
        <Input02
          name="태그입력"
          type="text"
          register={props.register("tags")}
          error={props.formState.errors.price?.tags}
          defaultValue={props.data?.fetchUseditem.tags}
        />
        <Map01 />
        <ImgAttach>
          {new Array(4).fill(1).map((el, index) => (
            <UploadImage01
              key={`${el}${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
              defaultImageUrl={props.data?.fetchUseditem.images?.[index]}
            />
          ))}
        </ImgAttach>
        <Radio01 />
        {props.isEdit ? (
          <Button02
            name="수정하기"
            isValid={props.formState.isValid}
          ></Button02>
        ) : (
          <Button02
            name="등록하기"
            isValid={props.formState.isValid}
          ></Button02>
        )}
      </Wrapper>
    </form>
  );
}
