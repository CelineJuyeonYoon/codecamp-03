import Input02 from "../../../commons/inputs/02/input02";
import Button02 from "../../../commons/buttons/02/button02";
import { Wrapper, Title } from "./ProductWrite.styles";
import Map01 from "../../../commons/maps/01/map01";
import UploadImage01 from "../../../commons/uploadImages/01/uploadImage01";
import Radio01 from "../../../commons/radios/01/radio01";

export default function ProductWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Wrapper>
        <Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
        <Input02
          name="상품명"
          type="text"
          register={props.register("name")}
          value={props.formState.errors.name?.message}
        />
        <Input02
          name="한줄요약"
          type="text"
          register={props.register("remarks")}
          value={props.formState.errors.remarks?.message}
        />
        <Input02
          name="상품설명"
          type="text"
          register={props.register("contents")}
          value={props.formState.errors.contents?.message}
        />
        <Input02
          name="판매가격"
          type="text"
          register={props.register("price")}
          value={props.formState.errors.price?.message}
        />
        <Input02
          name="태그입력"
          type="text"
          register={props.register("tags")}
          value={props.formState.errors.price?.tags}
        />
        <Map01 />
        <UploadImage01 />
        <Radio01 />
        <Button02 name="등록하기" isValid={props.formState.isValid}></Button02>
      </Wrapper>
    </form>
  );
}
