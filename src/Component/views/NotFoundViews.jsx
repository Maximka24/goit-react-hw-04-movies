import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function NotFoudViews() {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  });

  return <div></div>;
}
