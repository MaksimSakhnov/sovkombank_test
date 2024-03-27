import { IWord } from 'store/words/types';
import { ReactNode } from 'react';

export type WordsListProps = {
  wordsData: Array<IWord>;
  onAddToStarredClick: (arg: IWord) => void;
  onRemoveFromStarredClick: (arg: IWord) => void;
  isLoading?: boolean;
  pagination?: ReactNode;
};
