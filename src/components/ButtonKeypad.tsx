/** @jsxImportSource @emotion/react */

import { Button } from './Button';

import { FiDelete } from 'react-icons/fi';

interface Props {
  clickButton: (num: string) => void;
}

export function ButtonKeypad({ clickButton }: Props) {
  const numberKeypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const clickNumberHandler = (num: number) => {
    clickButton(num + '');
  };

  const clickDeleteHandler = () => {
    clickButton('del');
  };

  return (
    <div
      css={{
        width: '100%',
        padding: '10px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '5px',
      }}
    >
      {numberKeypad.map((num, idx) => (
        <>
          {num === 0 && (
            <div key={`keypad_space`} css={{ gridColumn: '1 / 2' }} />
          )}
          <Button
            key={`keypad_${num}_${idx}`}
            variant='secondary'
            onClick={() => clickNumberHandler(num)}
          >
            {num}
          </Button>
        </>
      ))}
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant='secondary'
        onClick={clickDeleteHandler}
      >
        <FiDelete size='20px' />
      </Button>
    </div>
  );
}
