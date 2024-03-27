import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { wordsActions } from 'store/words';
import SideBarContainer from 'containers/SideBarContainer';
import { StarredWordsContainer } from 'containers/StarredWordsContainer/StarredWordsContainer';
import Layout from 'components/Layout';

export function PageStarred() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wordsActions.initFilteredFavoriteWords());
  }, [dispatch]);

  return (
    <Layout>
      <SideBarContainer withFilterStarred={true} />
      <StarredWordsContainer />
    </Layout>
  );
}
