/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { Txt } from '../components/Txt';
import { Input } from '../components/Input';
import { QuestionFindAnimalName } from '../pages/FindAnimalName';

import { GoArrowRight } from 'react-icons/go';

interface Props {
  question: QuestionFindAnimalName;
  checkAnswer: (item: QuestionFindAnimalName, idx: number) => void;
}

export function ConsonantInput(props: Props) {
  const { question, checkAnswer } = props;
  const [inputValue, setInputValue] = useState('');

  /**
   * checkAnswer ? idx ?
   * checkAnswer --- start
   */

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 0.3fr 1fr',
        height: '80px',
        margin: '0 5px',
        alignItems: 'center',
      }}
    >
      <Txt typography='h3'>{question.consonant}</Txt>
      <GoArrowRight css={{ fontSize: '40px' }} />
      <Input
        value={inputValue}
        length={question.consonant.length}
        onChange={setInputValue}
      />
    </div>
  );
}
