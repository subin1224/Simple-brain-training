import { ItemObject } from 'components/bord/Board';

export const colors = [
  'blue',
  'green',
  'yellow',
  'gray',
  'pink',
  'black',
  'red',
  'purple',
  'brown',
  'orange',
];

export const words = [
  '파랑',
  '초록',
  '노랑',
  '회색',
  '분홍',
  '검정',
  '빨강',
  '보라',
  '갈색',
  '주황',
];
export interface IColorsAndWords {
  question: string;
  questionData: Array<ItemObject>;
}
interface IColorList {
  [color: string]: string;
}
export const colorsAndWords: IColorList = {
  blue: '파랑색',
  green: '초록색',
  yellow: '노랑색',
  gray: '회색',
  pink: '분홍색',
  black: '검정색',
  red: '빨강색',
  purple: '보라색',
  brown: '갈색',
  orange: '주황색',
};

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
