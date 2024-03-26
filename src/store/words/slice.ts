import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import wordsInitialState from './initialState';
import { getWords } from './requests';
import { IWord } from './types';

const wordsSlice = createSlice({
  name: 'words',
  initialState: wordsInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getWords.fulfilled, (state, action) => {
        state.wordsData = [
          ...state.wordsData,
          ...action.payload.data,
        ] as IWord[];
        state.isLoading = false;
      })
      .addCase(getWords.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default wordsSlice;
