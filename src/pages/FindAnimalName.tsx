import { CardFooter } from 'components/card/CardFooter';
import { PageLayout } from '../components/PageLayout';
import { Txt } from '../components/Txt';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardTitle } from '../components/card/CardTitle';
import { ConsonantInput, WrapperWithIndex } from 'components/ConsonantInput';
import { Button } from 'components/Button';
import { extractConsonant } from 'utils/commonUtils';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import useCountAnswer from 'hooks/useCountAnswer';
import { AnswerContext } from 'contexts/answer-context';

export interface QuestionFindAnimalName {
  consonant: string;
  answer: string;
}

export function FindAnimalName() {
  const [userAnswers, setUserAnswers] = useState<{ [answer: string]: boolean }>(
    {}
  );
  const answerCtx = useContext(AnswerContext);

  const { answerCount } = useCountAnswer(userAnswers);

  const inputChangeHandler = (answer: string, isCorrect: boolean) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [answer]: isCorrect,
    }));
  };

  const questionFindAniamlName: QuestionFindAnimalName[] =
    ANSWER_FIND_ANIMAL_NAME.map((words) => {
      return {
        consonant: extractConsonant(words),
        answer: words,
      };
    });

  const clickButtonHandler = () => {
    answerCtx.onSaveCount({
      question: ANSWER_FIND_ANIMAL_NAME.length,
      answer: answerCount,
    });
  };

  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography='h3'>동물 이름 맞히기</Txt>
          <br />
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
            <WrapperWithIndex key={`${item.answer}` + idx} idx={idx + 1}>
              <ConsonantInput
                key={`${item.answer}${item.consonant}`}
                question={item}
                onInputChange={inputChangeHandler}
              />
            </WrapperWithIndex>
          ))}
        </CardContent>
        <CardFooter>
          <Link to='/colorsWord'>
            <Button onClick={clickButtonHandler}>Next</Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  );
}

const ANSWER_FIND_ANIMAL_NAME = [
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
