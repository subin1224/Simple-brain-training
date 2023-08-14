/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { ButtonKeypad } from './ButtonKeypad';
import { Input } from './Input';

export function InstantAnswer() {
  const [inputValue, setInputValue] = useState('');
  const changeHandler = (val: string) => {
    setInputValue(val);
  };
  return (
    <div css={{}}>
      <Input value={inputValue} readonly={true} />
      <ButtonKeypad />
    </div>
  );
}
