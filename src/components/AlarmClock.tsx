/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

import { useEffect, useState } from 'react';
import alarmClock from '../assets/alarm-clock.png';
import { Txt } from './Txt';
import { SIZE_TYPE } from '../constants/size';

interface Props {
  size?: SIZE_TYPE;
  initialTime: number;
  onTimeout: () => void;
}

export function AlarmClock({ size = 'small', initialTime, onTimeout }: Props) {
  const [time, setTime] = useState<number>(initialTime);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    if (time === 0) {
      setIsFinished(true);
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, onTimeout]);

  return (
    <div
      css={css`
        display: inline-block;
        position: relative;
        ${CLOCK_SIZE[size]}
        ${isFinished
          ? css`
              animation: ${finishAnimation} 0.5s 2;
            `
          : ''}
      `}
    >
      <img css={{ width: CLOCK_SIZE[size].width }} src={alarmClock} />
      <Txt
        css={{
          position: 'absolute',
          top: '56%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
          fontSize: CLOCK_SIZE[size].fontSize,
          fontWeight: CLOCK_SIZE[size].fontWeight,
        }}
      >
        {time}
      </Txt>
    </div>
  );
}

const CLOCK_SIZE = {
  large: {
    width: '500px',
    height: '500px',
    fontSize: '150px',
    fontWeight: 800,
  },
  medium: {
    width: '300px',
    height: '300px',
    fontSize: '100px',
    fontWeight: 800,
  },
  small: {
    width: '200px',
    height: '200px',
    fontSize: '48px',
    fontWeight: 800,
  },
};

const finishAnimation = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-30deg);
  }
  75% {
    transform: rotate(30deg);
  }
`;
