import { IWord } from 'store/words/types';

export interface IWordsResponse {
  data: Array<IWord>;
  meta: {
    totalPages: number;
    currentPage: number;
  };
}
