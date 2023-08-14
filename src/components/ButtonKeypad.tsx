/** @jsxImportSource @emotion/react */

import { Button } from './Button';

import { FiDelete } from 'react-icons/fi';

export function ButtonKeypad() {
  const numberKeypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '5px',
      }}
    >
      {numberKeypad.map((num) => (
        <>
          {num === 0 && (
            <div key={`keypad_space`} css={{ gridColumn: '1 / 2' }} />
          )}
          <Button key={`keypad_${num}`} variant='secondary'>
            {num}
          </Button>
        </>
      ))}
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
        }}
        variant='secondary'
      >
        <FiDelete size='20px' />
      </Button>
    </div>
  );
}
