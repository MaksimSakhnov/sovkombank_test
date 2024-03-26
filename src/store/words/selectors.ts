import type { RootState } from 'store';

function selectIsLoading(state: RootState) {
  return state.words.isLoading;
}

function selectWordsData(state: RootState) {
  return state.words.wordsData;
}

function selectFavoriteWords(state: RootState) {
  return state.words.favoriteWords;
}

function selectCurrentPage(state: RootState) {
  return state.words.currentPage;
}

function selectTotalPages(state: RootState) {
  return state.words.totalPages;
}

export {
  selectFavoriteWords,
  selectWordsData,
  selectIsLoading,
  selectCurrentPage,
  selectTotalPages,
};
