import { Component, JSXElementConstructor, ReactElement, ReactNode, useContext } from "react";
import { routerContext } from "./routerContext";

interface RouteProps {
  to: string;
  element: ReactElement;
}
const Route: React.FC<RouteProps> = ({ to, element }) => {
  const { path } = useContext(routerContext);

  if (path === to) {
    return element;
  }
  return null;
};

export default Route;
