import React from "react";

interface ButtonReuseProps {
  title: string;
  callback: () => void;
}

const ButtonResuse = (props: ButtonReuseProps) => {
  const { title, callback } = props;
  return <button onClick={callback}>{title}</button>;
};

export default ButtonResuse;
