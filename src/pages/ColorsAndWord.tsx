import { AlarmClock } from 'components/AlarmClock';
import { PageLayout } from 'components/PageLayout';
import { Txt } from 'components/Txt';
import { Board } from 'components/bord/Board';
import { Card } from 'components/card/Card';
import { CardContent } from 'components/card/CardContent';
import { CardTitle } from 'components/card/CardTitle';
import {
  IColorsAndWords,
  colorsAndWords,
  createColorQuestion,
} from 'constants/colors';
import { ALARM_CLOCK_SIZE } from 'constants/size';
import { AnswerContext } from 'contexts/answer-context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BOARD_ROW = 3;
/** TODO: question 관련 상수 나중에 한 페이지로 변경하기 */
const COLOR_WORD_QUESTION = 5;

export function ColorsAndWord() {
  const { onSaveCount } = useContext(AnswerContext);
  const navigate = useNavigate();

  const [questions, setQuestion] = useState<IColorsAndWords>(
    createColorQuestion(colorsAndWords)
  );
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);
  const [countdown, setCountdown] = useState(false);

  const { question, questionData } = questions;

  const confirmClickValue = (color?: string) => {
    if (questions.question === color) {
      setAnswerCount(answerCount + 1);
    }
    setCountdown(true);
    setQuestionNumber(questionNumber + 1);
  };

  useEffect(() => {
    if (questionNumber === COLOR_WORD_QUESTION) {
      console.log(`문제 끝 : ${COLOR_WORD_QUESTION}, ${answerCount}`);
      onSaveCount({ question: COLOR_WORD_QUESTION, answer: answerCount });
      /** 새로운 문제로 이동 */
      navigate('/newPage');
    } else {
      setQuestion(createColorQuestion(colorsAndWords));
      setCountdown(false);
    }
  }, [questionNumber]);

  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography="h3">색깔 이름 맞히기</Txt>
        </CardTitle>
        <CardContent>
          <Txt typography="h5">
            <Txt typography="h5" color={question}>
              {colorsAndWords[question]}
            </Txt>{' '}
            글자를 클릭하세요.
          </Txt>
          {!countdown && (
            <AlarmClock
              size={ALARM_CLOCK_SIZE.SMALLER}
              initialTime={2}
              top={'30px'}
              onTimeout={confirmClickValue}
            />
          )}
          <Board
            row={BOARD_ROW}
            data={questionData}
            colorHandler={confirmClickValue}
          />
        </CardContent>
      </Card>
    </PageLayout>
  );
}

/**
 * 색상 클릭 시 문제 reset
 * 색상 클릭 X 3초 뒤 문제 reset
 * 문제 reset 하면 3초 카운트다운 다시 시작
 *
 *
 *
 *
 *
 *
 */
