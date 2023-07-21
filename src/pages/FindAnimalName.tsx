import { CardFooter } from 'components/card/CardFooter';
import { PageLayout } from '../components/PageLayout';
import { Txt } from '../components/Txt';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardTitle } from '../components/card/CardTitle';
import { ConsonantInput } from 'components/ConsonantInput';
import { Button } from 'components/Button';
import { extractConsonant } from 'utils/commonUtils';

export function FindAnimalName() {
  const answerFindAnimalName = [
    '기린',
    '코끼리',
    '얼룩말',
    '도롱뇽',
    '하마',
    '청설모',
    '까마귀',
    '멧돼지',
    '다람쥐',
    '도마뱀',
    '독수리',
    '참새',
  ];
  const questionFindAniamlName: QuestionFindAnimalName[] =
    answerFindAnimalName.map((words) => {
      return {
        consonant: extractConsonant(words),
        answer: words,
        isAnswered: false,
      };
    });

  const checkAnswer = (item: QuestionFindAnimalName, idx: number) => {
    questionFindAniamlName[idx] = { ...item };
  };

  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography='h3'>동물 이름 맞히기</Txt>
          <br /> {/* 추후 수정 예정 */}
          <Txt typography='h5'>
            다음 제시된 자음을 보고 동물 이름을 맞혀보세요.
          </Txt>
        </CardTitle>
        <CardContent
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {questionFindAniamlName.map((item, idx) => (
            <ConsonantInput
              key={`${item.answer}` + idx}
              question={item}
              checkAnswer={checkAnswer}
            />
          ))}
        </CardContent>
        <CardFooter>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </PageLayout>
  );
}

export interface QuestionFindAnimalName {
  consonant: string;
  answer: string;
  isAnswered: boolean;
}
