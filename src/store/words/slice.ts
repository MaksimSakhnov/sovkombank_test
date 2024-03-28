import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import wordsInitialState from './initialState';
import { getWords } from './requests';
import { IFiltersInFavoriteWords, IWord } from './types';

const wordsSlice = createSlice({
  name: 'words',
  initialState: wordsInitialState,
  reducers: {
    setQueryString: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.currentPage = 1;
    },
    setFilteredFavoriteWords: (
      state,
      action: PayloadAction<IFiltersInFavoriteWords>,
    ) => {
      const filters = action.payload;
      if (
        filters.search === '' &&
        !filters.adjectiveChecked &&
        !filters.nounChecked &&
        !filters.verbChecked
      ) {
        state.filteredFavoriteWords = [...state.favoriteWords];
        state.hasFilters = false;
      } else {
        const hasFilters =
          filters.adjectiveChecked ||
          filters.nounChecked ||
          filters.verbChecked;

        state.filteredFavoriteWords = state.favoriteWords
          .filter((el) => {
            if (filters.search !== '') {
              const passesSearch = el.word
                .toLowerCase()
                .startsWith(filters.search.toLowerCase());

              if (!passesSearch) return false;
            }

            if (
              hasFilters &&
              ((filters.adjectiveChecked && el.pos === 'adjective') ||
                (filters.nounChecked && el.pos === 'noun') ||
                (filters.verbChecked && el.pos === 'verb'))
            ) {
              return true;
            } else return !hasFilters;
          })
          .sort((el1, el2) => el1.word.localeCompare(el2.word));
        state.hasFilters = true;
      }
    },
    initFilteredFavoriteWords: (state) => {
      state.filteredFavoriteWords = [...state.favoriteWords];
    },
    setIsInit: (state, action: PayloadAction<boolean>) => {
      state.isInit = action.payload;
    },
    setFavoriteWords: (state, action: PayloadAction<Array<IWord>>) => {
      state.favoriteWords = action.payload;
      if (!state.isInit) {
        state.filteredFavoriteWords = [...state.favoriteWords];
      }
    },
    addToStarred: (state, action: PayloadAction<IWord>) => {
      state.favoriteWords = [...state.favoriteWords, action.payload];
    },
    removeFromStarred: (state, action: PayloadAction<IWord>) => {
      state.favoriteWords = state.favoriteWords.filter(
        (el) => el.id !== action.payload.id,
      );
      state.filteredFavoriteWords = [...state.favoriteWords];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWords.fulfilled, (state, action) => {
        state.wordsData = action.payload.data;
        state.isLoading = false;
        state.currentPage = action.payload.meta.currentPage;
        state.totalPages = action.payload.meta.totalPages;
        state.hasFilters = false;
      })
      .addCase(getWords.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWords.rejected, (state) => {
        state.isLoading = false;
        state.hasFilters = false;
      });
  },
});

export default wordsSlice;
