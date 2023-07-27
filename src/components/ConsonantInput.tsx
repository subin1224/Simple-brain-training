/** @jsxImportSource @emotion/react */
import { useState, ReactNode } from 'react';

import { Txt } from '../components/Txt';
import { Input } from '../components/Input';
import { QuestionFindAnimalName } from '../pages/FindAnimalName';

import { GoArrowRight } from 'react-icons/go';

interface Props {
  question: QuestionFindAnimalName;
}

export function ConsonantInput(props: Props) {
  const { question } = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      css={{
        display: 'grid',
        flex: '3',
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

export function WrapperWithIndex({
  idx,
  children,
}: {
  idx: number;
  children: ReactNode;
}) {
  return (
    <div css={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <div css={{ flex: '.5', textAlign: 'right' }}>
        <Txt typography='h3'>{idx}.</Txt>
      </div>
      {children}
    </div>
  );
}
