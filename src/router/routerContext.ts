import { createContext, Dispatch, SetStateAction } from "react";

const routerContext = createContext({
  path: "",
});

interface RouterControlContext {
  setPath: (path: string) => void;
}

const routerControlContext = createContext<RouterControlContext>({
  setPath: () => {},
});

export { routerContext, routerControlContext };
