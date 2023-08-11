interface UserAnswers {
  [answer: string]: boolean;
}

const useCountAnswer = (
  userAnswers: UserAnswers
): { questionCount: number; answerCount: number } => {
  const questionCount = Object.keys(userAnswers).length;
  const answerCount = Object.values(userAnswers).filter(Boolean).length;

  return { questionCount, answerCount };
};

export default useCountAnswer;
