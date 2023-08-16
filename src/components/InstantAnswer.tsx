/** @jsxImportSource @emotion/react */

import { useRef, useState } from 'react';
import { ButtonKeypad } from './ButtonKeypad';
import { Input } from './Input';
import { Button } from './Button';

const DELETE = 'del';

export function InstantAnswer() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getClickValue = (val: string) => {
    val === DELETE
      ? setInputValue((prev) => prev.slice(0, -1))
      : setInputValue((prev) => prev + val);
  };

  const inputFocusHandler = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Input
        ref={inputRef}
        css={{ textAlign: 'right', cursor: 'default' }}
        value={inputValue}
        readonly={true}
        onFocus={inputFocusHandler}
      />
      <ButtonKeypad clickButton={getClickValue} />
      <Button css={{ width: '50%', margin: '10px 0' }} variant='primary'>
        Next
      </Button>
    </div>
  );
}
