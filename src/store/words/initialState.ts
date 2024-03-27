import { IWord } from './types';

const wordsInitialState = {
  isLoading: false as boolean,
  wordsData: [] as Array<IWord>,
  favoriteWords: [] as Array<IWord>,
  filteredFavoriteWords: [] as Array<IWord>,
  currentPage: 1 as number,
  totalPages: 0 as number,
  query: '' as string,
  isInit: false as boolean,
};

export default wordsInitialState;
