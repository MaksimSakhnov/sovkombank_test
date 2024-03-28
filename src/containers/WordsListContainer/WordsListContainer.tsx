import { useAppDispatch } from 'store';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getWords,
  selectCurrentPage,
  selectIsLoading,
  selectQuery,
  selectTotalPages,
  selectWordsData,
  wordsActions,
} from 'store/words';
import useSaveStarredValues from 'hooks/useSaveStarredValues';
import PaginationContainer from 'containers/PaginationContainer';
import WordsList from 'components/WordsList';
import { IWord } from 'store/words/types';

export function WordsListContainer() {
  const dispatch = useAppDispatch();
  useSaveStarredValues();

  const wordsData = useSelector(selectWordsData);
  const isLoading = useSelector(selectIsLoading);
  const totalPages = useSelector(selectTotalPages);
  const curPage = useSelector(selectCurrentPage);
  const query = useSelector(selectQuery);

  const [currentPage, setCurrentPage] = useState(curPage);

  const onAddToStarredClick = (word: IWord) => {
    dispatch(wordsActions.addToStarred(word));
  };

  const onRemoveFromStarredClick = (word: IWord) => {
    dispatch(wordsActions.removeFromStarred(word));
  };

  const renderPagination = useCallback(() => {
    return (
      <PaginationContainer
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
  }, [currentPage, totalPages]);

  useEffect(() => {
    dispatch(getWords({ page: currentPage, query: query }));
  }, [currentPage, dispatch, query]);

  return (
    <WordsList
      wordsData={wordsData}
      isLoading={isLoading}
      onAddToStarredClick={onAddToStarredClick}
      onRemoveFromStarredClick={onRemoveFromStarredClick}
      pagination={renderPagination()}
    />
  );
}
