import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { routerContext, routerControlContext } from "./routerContext";

const Router: React.FC<PropsWithChildren> = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const handleChangePath = useCallback(
    (to: string) => {
      setPath(to);
    },
    [setPath]
  );

  const callback = useCallback((e: PopStateEvent) => {
    handleChangePath(window.location.pathname);
    console.log(e.state);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", callback);
    return () => {
      window.removeEventListener("popstate", callback);
    };
  }, []);

  return (
    <routerContext.Provider value={{ path }}>
      <routerControlContext.Provider value={{ setPath: handleChangePath }}>{children}</routerControlContext.Provider>
    </routerContext.Provider>
  );
};

export default Router;
