import { IWord } from 'store/words/types';

export type WordAccordeonProps = {
  data: IWord;
  onAddToStarredClick: () => void;
  onRemoveFromStarredClick: () => void;
};
