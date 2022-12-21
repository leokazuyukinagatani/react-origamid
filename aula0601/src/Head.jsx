import { useEffect } from "react";

export function Head(props) {
  useEffect(() => {
    document.title = "Origamid | " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
    console.log(props);
  }, [props]);
  return <></>;
}
