import { PropsWithChildren, SyntheticEvent, useCallback, useContext } from "react";
import { routerControlContext } from "./routerContext";

interface P extends PropsWithChildren {
  to: string;
}

const Link: React.FC<P> = ({ to, children }) => {
  const { setPath } = useContext(routerControlContext);

  const handleClick = useCallback(
    (e: SyntheticEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      setPath(to);
      history.pushState("", "", to);
    },
    [to]
  );

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
