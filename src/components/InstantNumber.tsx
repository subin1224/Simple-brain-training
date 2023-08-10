/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useEffect, useState } from 'react';
import { Txt } from './Txt';

interface Props {
  value: number;
  onShowNumber: () => void;
}

type FadeProp = { fade: 'fade-in' | 'fade-out' };
const FADE_INTERVAL_MS = 1500;

export function InstantNumber({ value, onShowNumber }: Props) {
  const [showNumberIdx, setShowNumberIdx] = useState<number>(0);
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-out' });

  const showNumberArray = Array.from(String(value), Number);
  const showNumberArrayLength = showNumberArray.length;

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      fadeProp.fade === 'fade-in'
        ? setFadeProp({ fade: 'fade-out' })
        : setFadeProp({ fade: 'fade-in' });
    }, FADE_INTERVAL_MS);

    if (showNumberIdx >= showNumberArrayLength) {
      clearTimeout(fadeTimeout);
      return;
    }

    return () => clearTimeout(fadeTimeout);
  }, [fadeProp, showNumberIdx, showNumberArrayLength]);

  useEffect(() => {
    const numberTimeout = setTimeout(() => {
      setShowNumberIdx((prev) => prev + 1);
    }, FADE_INTERVAL_MS * 3);

    if (showNumberIdx >= showNumberArrayLength) {
      clearTimeout(numberTimeout);
      onShowNumber();
      return;
    }

    return () => clearTimeout(numberTimeout);
  }, [showNumberIdx, showNumberArrayLength]);

  return (
    <div
      css={{
        margin: '50px auto',
      }}
    >
      <Txt css={fadeStyle[fadeProp.fade]} typography='h1'>
        {showNumberArray[showNumberIdx]}
      </Txt>
    </div>
  );
}

const fadeStyle = {
  'fade-in': css`
    opacity: 1;
    transition: opacity 1.5s ease;
  `,
  'fade-out': css`
    opacity: 0;
    transition: opacity 1.5s ease;
  `,
};
