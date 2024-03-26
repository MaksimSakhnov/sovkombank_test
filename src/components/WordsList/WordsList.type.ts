import { IWord } from 'store/words/types';
import { UIEvent } from 'react';

export type WordsListProps = {
  wordsData: Array<IWord>;
  handleScroll: (e: UIEvent<HTMLDivElement>) => void;
};
