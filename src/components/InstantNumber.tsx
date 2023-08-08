/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';

import { Txt } from './Txt';

interface Props {
  value: number;
}

export function InstantNumber({ value }: Props) {
  const [showNumber, setShowNumber] = useState<string>('');
  const timeouts = useRef<NodeJS.Timeout[]>([]);
  const numbersRef = useRef<string[]>(Array.from(String(value) + ' '));

  useEffect(() => {
    const timeoutsCopy = timeouts.current;
    const numbers = numbersRef.current;
    const setTimeNumber = async () => {
      for (let i = 0; i < numbers.length; i++) {
        await new Promise<void>((resolve) => {
          timeouts.current[i] = setTimeout(() => {
            setShowNumber(numbers[i]);
            resolve();
          }, 1500);
        });
      }
    };

    setTimeNumber();
    return () => {
      timeoutsCopy.forEach((val) => {
        clearTimeout(val);
      });
    };
  }, []);

  return (
    <div>
      <NumberTxt txt={showNumber} />
    </div>
  );
}

function NumberTxt({ txt }: { txt: string }) {
  return <Txt typography='h1'>{txt}</Txt>;
}
