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

function selectQuery(state: RootState) {
  return state.words.query;
}

function selectIsInit(state: RootState) {
  return state.words.isInit;
}

function selectFilteredFavoriteWords(state: RootState) {
  return state.words.filteredFavoriteWords;
}

function selectHasFilters(state: RootState) {
  return state.words.hasFilters;
}

export {
  selectFavoriteWords,
  selectWordsData,
  selectIsLoading,
  selectCurrentPage,
  selectTotalPages,
  selectQuery,
  selectIsInit,
  selectFilteredFavoriteWords,
  selectHasFilters,
};
