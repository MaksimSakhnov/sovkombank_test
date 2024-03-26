import { createAsyncThunk } from '@reduxjs/toolkit';
import { WordsApi } from 'services/api/wordsApi';

const getWords = createAsyncThunk(
  'words/getWords',
  async (data: { page: number }) => {
    const response = await WordsApi.getWords(data.page);
    return response;
  },
);

export { getWords };
