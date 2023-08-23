import { ItemObject } from 'components/board/Board';

export interface IColorsAndWords {
  question: string;
  questionData: Array<ItemObject>;
}
export interface IColorList {
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
