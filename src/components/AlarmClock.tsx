/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import alarmClock from '../assets/alarm-clock.png';
import { Txt } from './Txt';

interface Props {
  initialTime: number;
  onTimeout: () => void;
}

export function AlarmClock(props: Props) {
  const { initialTime, onTimeout } = props;

  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    if (time === 0) {
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
      css={{
        display: 'inline-block',
        position: 'relative',
        width: '200px',
        height: '200px',
      }}
    >
      <img css={{ width: '200px' }} src={alarmClock} />
      <Txt
        typography='h2'
        css={{
          position: 'absolute',
          top: '56%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {time}
      </Txt>
    </div>
  );
}
