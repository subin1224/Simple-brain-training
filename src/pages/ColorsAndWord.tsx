import { PageLayout } from 'components/PageLayout';
import { Txt } from 'components/Txt';
import { ColorBoard } from 'components/bord/ColorBoard';
import { Card } from 'components/card/Card';
import { CardContent } from 'components/card/CardContent';
import { CardTitle } from 'components/card/CardTitle';
const row = 3;
const data = [
  { key: 'b-r', text: '파랑', color: 'red' },
  { key: 'g-y', text: '초록', color: 'yellow' },
  { key: 'y-p', text: '노랑', color: 'pink' },
  { key: 'p-b', text: '핑크', color: 'black' },
  { key: 'b-w', text: '검정', color: 'white' },
  { key: 'w-o', text: '하얀', color: 'orange' },
  { key: 'b-g', text: '검정', color: 'green' },
  { key: 'o-b', text: '주황', color: 'blue' },
];
// const q = Math.floor(Math.random() * 12 + 1)
const question = '파란색';
export function ColorsAndWord() {
  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography="h3">색깔 이름 맞히기</Txt>
          <br />
          <Txt typography="h5">
            <Txt typography="h5" color="blue">
              {question}
            </Txt>{' '}
            글자를 클릭하세요.
          </Txt>
        </CardTitle>
        <CardContent>
          <ColorBoard row={row} data={data}></ColorBoard>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
