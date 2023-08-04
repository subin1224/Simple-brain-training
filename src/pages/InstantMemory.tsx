import { InstantNumber } from 'components/InstantNumber';
import { PageLayout } from '../components/PageLayout';
import { Txt } from '../components/Txt';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardTitle } from '../components/card/CardTitle';

export function InstantMemory() {
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <InstantNumber value={543} />
        </CardContent>
      </Card>
    </PageLayout>
  );
}
