import { InstantNumber } from 'components/InstantNumber';
import { PageLayout } from '../components/PageLayout';
import { Txt } from '../components/Txt';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardTitle } from '../components/card/CardTitle';

import { InstantAnswer } from 'components/InstantAnswer';
import { makeRandomNumber } from 'utils/commonUtils';
import { useState } from 'react';

export function InstantMemory() {
  /**
   * 문제를 생성 (Lv.12가 최대) 3자리수 ~ 14자리수
   * instantNumber 의 숫자가 전부 보여지면 inputAnswer 이 보여지도록 설정
   * instantAnswer -> input, button, txt 컴포넌트 사용
   * input 에서 엔터를 누르거나 / 버튼 클릭시 정답을 보여주는 페이지 이동
   * 다음 레벨로 이동하는 버튼 (맞추었을 떄)
   * 다음 문제로 이동하는 버튼 (틀렸을 때) -> 레벨 저장 (맞춘 갯수)
   */

  const [finishNumber, setFinishNumber] = useState(false);
  // const [level, setLevel] = useState(1);

  const randomNumber = makeRandomNumber(Math.pow(10, 2), Math.pow(10, 3));
  const finishHandler = (isFinishNum: boolean) => {
    setFinishNumber(isFinishNum);
  };

  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography='h3'>순간 기억력 테스트</Txt>
          <br />
          <Txt typography='h5'>
            {finishNumber ? (
              <span>
                기억한 숫자를
                <Txt typography='h5' color='red'>
                  &nbsp;역순&nbsp;
                </Txt>
                으로 입력하세요
              </span>
            ) : (
              '아래 숫자를 기억하세요'
            )}
          </Txt>
        </CardTitle>
        <CardContent
          css={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {!finishNumber ? (
            <InstantNumber
              value={randomNumber}
              onFinishNumber={finishHandler}
            />
          ) : (
            <InstantAnswer />
          )}
        </CardContent>
      </Card>
    </PageLayout>
  );
}
