import { useContext } from "react";
import { routerControlContext } from "./routerContext";

export function useRouter() {
  const { setPath } = useContext(routerControlContext);
  const push = (url: string) => {
    setPath(url);
    history.pushState("", "", url);
  };
  return {
    push,
  };
}
