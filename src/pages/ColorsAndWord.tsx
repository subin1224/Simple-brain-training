import { PageLayout } from 'components/PageLayout';
import { Txt } from 'components/Txt';
import { Card } from 'components/card/Card';
import { CardContent } from 'components/card/CardContent';
import { CardTitle } from 'components/card/CardTitle';

const colors = [
  'blue',
  'green',
  'yellow',
  'gray',
  'pink',
  'black',
  'white',
  'red',
  'purple',
  'beige',
  'brown',
  'orange',
];

const words = [
  '파랑',
  '초록',
  '노랑',
  '회색',
  '분홍',
  '검정',
  '흰색',
  '빨강',
  '보라',
  '살구',
  '갈색',
  '주황',
];
export function ColorsAndWord() {
  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography="h3">색깔 이름 맞히기</Txt>
          <br />
          <Txt typography="h5">해당 색상</Txt>
        </CardTitle>
        <CardContent>
          <Txt typography="p">초록</Txt>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
