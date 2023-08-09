/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useEffect, useState } from 'react';
import { Txt } from './Txt';

interface Props {
  value: number;
}

type FadeProp = { fade: 'fade-in' | 'fade-out' };
const FADE_INTERVAL_MS = 1750;

export function InstantNumber({ value }: Props) {
  const [showNumberIdx, setShowNumberIdx] = useState<number>(0);
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-out' });

  const showNumberArray = Array.from(String(value), Number);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in'
        ? setFadeProp({ fade: 'fade-out' })
        : setFadeProp({ fade: 'fade-in' });
    }, FADE_INTERVAL_MS);

    if (showNumberIdx >= showNumberArray.length) {
      clearInterval(fadeTimeout);
      return;
    }

    return () => clearInterval(fadeTimeout);
  }, [fadeProp, showNumberIdx]);

  useEffect(() => {
    const numberTimeout = setInterval(() => {
      setShowNumberIdx((prev) => prev + 1);
    }, FADE_INTERVAL_MS * 3);

    if (showNumberIdx >= showNumberArray.length) {
      clearInterval(numberTimeout);
      return;
    }

    return () => clearInterval(numberTimeout);
  }, [showNumberIdx]);

  return (
    <div>
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
