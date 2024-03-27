import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { wordsActions } from 'store/words';
import { STARRED_VALUES } from 'constants/constants';

function useInitialValues() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const starredData = localStorage.getItem(STARRED_VALUES);
    if (starredData) {
      dispatch(wordsActions.setFavoriteWords(JSON.parse(starredData)));
    }
    dispatch(wordsActions.setIsInit(true));
  }, [dispatch]);
}
export default useInitialValues;
