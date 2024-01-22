import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export const BodyInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const valueRef = useRef();
  valueRef.current = { value, isValid };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (value) => {
    setValue(value);
    if (valueRef.current.value !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    props.onChange("body", value, valueRef.current.isValid);
  };

  return <SimpleMDE value={value} onChange={onChange} />;
};
