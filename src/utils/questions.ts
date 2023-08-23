import { IColorList, IColorsAndWords } from 'constants/colors';

/**
 * ColorsWord
 * @param colorsAndWords
 * @returns
 */
export const createColorQuestion = (
  colorsAndWords: IColorList
): IColorsAndWords => {
  const colorList = Object.keys(colorsAndWords);
  const wordList = Object.values(colorsAndWords);
  const length = colorList.length;

  const randomIndex = Math.floor(Math.random() * length);
  const question = colorList[Math.floor(Math.random() * length)];

  const questionData = wordList.map((word, index) => {
    const color =
      colorList[
        index + randomIndex >= length
          ? index + randomIndex - length
          : index + randomIndex
      ];
    return {
      key: `${word}-${index}-${color}`,
      text: word,
      color: color,
    };
  });

  return {
    question: question,
    questionData: questionData,
  };
};
