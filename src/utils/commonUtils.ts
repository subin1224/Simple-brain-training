/**
 * 한글을 넣으면 해당 단어의 자음을 추출해주는 함수
 */
const extractConsonant = (words: string): string => {
  let consonants = '';
  for (const char of words) {
    const code = Math.trunc((char.charCodeAt(0) - 44032) / 28 / 21);
    consonants += String.fromCharCode(code + 4352);
  }
  return consonants;
};

/**
 * 원하는 범위의 난수를 뽑아주는 함수 (min <= number < max)
 */
const makeRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export { extractConsonant, makeRandomNumber };
