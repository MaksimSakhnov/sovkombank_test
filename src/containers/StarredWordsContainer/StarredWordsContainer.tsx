import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { selectFilteredFavoriteWords, wordsActions } from 'store/words';
import useSaveStarredValues from 'hooks/useSaveStarredValues';
import WordsList from 'components/WordsList';
import { IWord } from 'store/words/types';

export function StarredWordsContainer() {
  const dispatch = useAppDispatch();
  useSaveStarredValues();

  const favoriteWords = useSelector(selectFilteredFavoriteWords);

  const onAddToStarredClick = (word: IWord) => {
    dispatch(wordsActions.addToStarred(word));
  };

  const onRemoveFromStarredClick = (word: IWord) => {
    dispatch(wordsActions.removeFromStarred(word));
  };

  return (
    <WordsList
      wordsData={favoriteWords}
      onAddToStarredClick={onAddToStarredClick}
      onRemoveFromStarredClick={onRemoveFromStarredClick}
    />
  );
}
