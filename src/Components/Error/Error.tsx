import React from "react";
interface ErrorProps {
  children: string;
}
const Error = ({ children }: ErrorProps) => {
  return <div>{children}</div>;
};

export default Error;
