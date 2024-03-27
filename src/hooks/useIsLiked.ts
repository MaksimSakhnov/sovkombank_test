import { useSelector } from 'react-redux';
import { selectFavoriteWords } from 'store/words';

function useIsLiked(wordId: number) {
  const favoriteWords = useSelector(selectFavoriteWords);
  return !!favoriteWords.find((el) => el.id === wordId);
}

export default useIsLiked;
