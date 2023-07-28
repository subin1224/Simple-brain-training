interface CompareAnswer {
  userAnswer: Array<string | number>;
  correctAnswer: Array<string | number>;
}

const useCountAnswer = (compareAnswer: CompareAnswer) => {
  const { userAnswer, correctAnswer } = compareAnswer;
  const questionsCount = correctAnswer.length;

  let answerCount = 0;
  for (let i = 0; i < questionsCount; i++) {
    if (userAnswer[i] === correctAnswer[i]) {
      answerCount++;
    }
  }

  return { answerCount, questionsCount };
};

export default useCountAnswer;
