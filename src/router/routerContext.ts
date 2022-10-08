import { createContext } from "react";

const RouterContext = createContext({
  path: "",
});

interface RouterControlContext {
  setPath: (path: string) => void;
}

const RouterControlContext = createContext<RouterControlContext>({
  setPath: () => {},
});

export { RouterContext, RouterControlContext };
