import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  content: string;
  color: string;
  onClick: MouseEventHandler;
}

function Button({
  content = 'button',
  color = '#000',
  onClick = () => {}
}: ButtonProps) {
  return (
    <>
      <button
        className={`text-[#fff] cursor-pointer min-h-[10px]
        font-bold rounded-[5px] px-[15px] py-[8px]`}
        onClick={onClick}
        style={{ backgroundColor: `${color}` }}
      >
        {content}
      </button>
    </>
  );
}

export default Button;
