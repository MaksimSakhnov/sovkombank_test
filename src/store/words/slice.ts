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
      } else {
        state.filteredFavoriteWords = state.favoriteWords.filter((el) => {
          if (filters.search !== '') {
            const passesSearch = el.word
              .toLowerCase()
              .includes(filters.search.toLowerCase());

            if (!passesSearch) return false;
          }

          if (
            (filters.adjectiveChecked && el.pos !== 'adjective') ||
            (filters.nounChecked && el.pos !== 'noun') ||
            (filters.verbChecked && el.pos !== 'verb')
          )
            return false;

          return true;
        });
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
    },
    addToStarred: (state, action: PayloadAction<IWord>) => {
      state.favoriteWords = [...state.favoriteWords, action.payload];
    },
    removeFromStarred: (state, action: PayloadAction<IWord>) => {
      state.favoriteWords = state.favoriteWords.filter(
        (el) => el.id !== action.payload.id,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWords.fulfilled, (state, action) => {
        state.wordsData = action.payload.data;
        state.isLoading = false;
        state.currentPage = action.payload.meta.currentPage;
        state.totalPages = action.payload.meta.totalPages;
      })
      .addCase(getWords.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default wordsSlice;
