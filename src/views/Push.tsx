import React from "react";
import { useRouter } from "../router/useRouter";

const Push = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>Example Push State</h1>
      <button onClick={() => push("/")}>Home</button>
    </div>
  );
};

export default Push;
