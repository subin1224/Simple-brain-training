/** @jsxImportSource @emotion/react */

import { Fragment } from 'react';
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
      {numberKeypad.map((num) => (
        <Fragment key={`keypad_${num}`}>
          {num === 0 && <div css={{ gridColumn: '1 / 2' }} />}
          <Button variant='secondary' onClick={() => clickNumberHandler(num)}>
            {num}
          </Button>
        </Fragment>
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
