import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
  onClick: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, style, children }) => {
  return (
    <AntButton onClick={onClick} style={style}>
      {children}
    </AntButton>
  );
};

export default Button;
