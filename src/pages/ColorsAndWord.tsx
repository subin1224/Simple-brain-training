import { PageLayout } from 'components/PageLayout';
import { Txt } from 'components/Txt';
import { ColorBoard } from 'components/bord/ColorBoard';
import { Card } from 'components/card/Card';
import { CardContent } from 'components/card/CardContent';
import { CardTitle } from 'components/card/CardTitle';
const row = 3;
const data = [
  { text: '파랑', color: 'red' },
  { text: '초록', color: 'yellow' },
  { text: '노랑', color: 'pink' },
  { text: '핑크', color: 'black' },
  { text: '검정', color: 'white' },
  { text: '하얀', color: 'orange' },
  { text: '검정', color: 'green' },
  { text: '주황', color: 'blue' },
];
export function ColorsAndWord() {
  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography="h3">색깔 이름 맞히기</Txt>
          <br />
          <Txt typography="h5">해당 색상과 같은 글자를 클릭하세요.</Txt>
        </CardTitle>
        <CardContent>
          <ColorBoard row={row} data={data}></ColorBoard>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
