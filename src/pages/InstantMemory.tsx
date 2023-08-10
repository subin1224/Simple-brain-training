import { InstantNumber } from 'components/InstantNumber';
import { PageLayout } from '../components/PageLayout';
import { Txt } from '../components/Txt';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardTitle } from '../components/card/CardTitle';
import { useState } from 'react';
import { Input } from 'components/Input';

export function InstantMemory() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onShowInstantNumber = () => {
    setShowInput(true);
  };

  const changeHandler = (value: string) => {
    setInputValue(value);
  };

  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography='h3'>순간 기억력 테스트</Txt>
          <br />
          <Txt typography='h5'>아래 숫자를 기억하세요.</Txt>
        </CardTitle>
        <CardContent
          css={{
            display: 'flex',
            height: '300px',
            textAlign: 'center',
          }}
        >
          <InstantNumber value={323} onShowNumber={onShowInstantNumber} />
          {showInput && <Input value={inputValue} onChange={changeHandler} />}
        </CardContent>
      </Card>
    </PageLayout>
  );
}
