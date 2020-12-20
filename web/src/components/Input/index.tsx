import React, { InputHTMLAttributes, useRef } from 'react';
import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

const Input: React.FC<InputProps> = ({ name,  ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return(
    <InputBlock>
      <input ref={inputRef} {...rest} />
    </InputBlock>
  );
}

export default Input; 