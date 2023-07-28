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
import { useState } from 'react';

export interface QuestionFindAnimalName {
  consonant: string;
  answer: string;
  isAnswered: boolean;
}

export function FindAnimalName() {
  const [userAnswers, setUserAnswers] = useState([]);

  const inputChangeHandler = () => {};

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

  // TODO
  /*
  next Button 을 누르면 link to colorsWord
  그와 동시에
  정답 체크 해서 context 저장

  정답 체크 로직
  1. Next 버튼을 누른다 = uncontrolled Components => ref 이용
  2. 사용자가 입력한 모든 값들을 가져온다 
  3. 정답과 사용자가 입력한 값을 비교해서 정답을 체크한다. 
  4. 정답 갯수를 컨텍스트에 저장한다. 
  */

  const clickButtonHandler = () => {
    console.log('click Button');
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
