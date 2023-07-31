import { ReactNode, createContext, useState } from 'react';

interface QuestionAndAnswerCount {
  question: number;
  answer: number;
}

interface AnswerContextProps {
  totalCount: QuestionAndAnswerCount[];
  onSaveCount: (userAnswer: QuestionAndAnswerCount) => void;
}

export const AnswerContext = createContext<AnswerContextProps>({
  totalCount: [],
  onSaveCount: (value: QuestionAndAnswerCount) => {},
});

export function AnswerProvider({ children }: { children: ReactNode }) {
  const [questionAndAnswerCount, setQuestionAndAnswerCount] = useState<
    QuestionAndAnswerCount[]
  >([]);

  const saveCount = (userAnswer: QuestionAndAnswerCount) => {
    setQuestionAndAnswerCount((prevAnswers) => [...prevAnswers, userAnswer]);
  };

  return (
    <AnswerContext.Provider
      value={{
        totalCount: questionAndAnswerCount,
        onSaveCount: saveCount,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
}
