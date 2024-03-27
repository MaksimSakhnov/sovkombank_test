import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteWords, selectIsInit } from 'store/words';
import { STARRED_VALUES } from 'constants/constants';

function useSaveStarredValues() {
  const starredValues = useSelector(selectFavoriteWords);
  const isInit = useSelector(selectIsInit);

  useEffect(() => {
    if (isInit) {
      localStorage.setItem(STARRED_VALUES, JSON.stringify(starredValues));
    }
  }, [isInit, starredValues]);
}
export default useSaveStarredValues;
