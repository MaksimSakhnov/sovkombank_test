import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { wordsActions } from 'store/words';
import SideBarContainer from 'containers/SideBarContainer';
import { StarredWordsContainer } from 'containers/StarredWordsContainer/StarredWordsContainer';
import Layout from 'components/Layout';
import { STARRED_VALUES } from 'constants/constants';

export function PageStarred() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wordsActions.initFilteredFavoriteWords());

    return () => {
      const starredData = localStorage.getItem(STARRED_VALUES);
      if (starredData) {
        dispatch(wordsActions.setFavoriteWords(JSON.parse(starredData)));
      }
    };
  }, [dispatch]);

  return (
    <Layout>
      <SideBarContainer withFilterStarred={true} />
      <StarredWordsContainer />
    </Layout>
  );
}
