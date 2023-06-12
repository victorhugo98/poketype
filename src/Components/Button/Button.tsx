import React from "react";


const Button = ({ children, ...props }: { children: string, disabled:boolean, onClick:()=>void }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
