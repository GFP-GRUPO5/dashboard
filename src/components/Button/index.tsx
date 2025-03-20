import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text:string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ className, onClick, text, ...props }: ButtonProps) => {
  return(
    <button
      onClick={onClick}
      className={`${className} h-12 rounded-lg cursor-pointer font-semibold text-base hover:scale-105`}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button