import { AlarmClock } from 'components/AlarmClock';
import { PageLayout } from '../components/PageLayout';
import { Txt } from '../components/Txt';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardTitle } from '../components/card/CardTitle';
import { useState } from 'react';

export function InstantMemory() {
  const [countdown, setCountdown] = useState(false);

  const countdownHandler = () => {
    setCountdown(true);
  };

  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography='h3'>순간 기억력 테스트</Txt>
          <br />
          <Txt typography='h5'>아래 그림을 기억하세요.</Txt>
        </CardTitle>
        <CardContent
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          그림 문제
          <AlarmClock initialTime={5} onTimeout={countdownHandler} />
          {countdown ? <p>CountDOWN</p> : <p>false</p>}
        </CardContent>
      </Card>
    </PageLayout>
  );
}
