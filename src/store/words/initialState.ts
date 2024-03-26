import { IWord } from './types';

const wordsInitialState = {
  isLoading: false as boolean,
  wordsData: [] as Array<IWord>,
  favoriteWords: [] as Array<IWord>,
  currentPage: 0 as number,
  totalPages: 0 as number,
};

export default wordsInitialState;
