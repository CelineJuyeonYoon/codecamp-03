import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavagation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMove(event: any) {
    router.push(event.target.id);
  }

  return <LayoutNavigationUI onClickMove={onClickMove} />;
}
