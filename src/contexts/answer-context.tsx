import { ReactNode, createContext, useState } from 'react';

interface QuestionAndAnswerCount {
  question: number;
  answer: number;
}

const AnswerContext = createContext<QuestionAndAnswerCount[] | undefined>(
  undefined
);

export function AnswerProvider({ children }: { children: ReactNode }) {
  const [questionAndAnswerCount, setQuestionAndAnswerCount] = useState<
    QuestionAndAnswerCount[]
  >([]);

  return (
    <AnswerContext.Provider value={questionAndAnswerCount}>
      {children}
    </AnswerContext.Provider>
  );
}
