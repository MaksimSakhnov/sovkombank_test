import { createAsyncThunk } from '@reduxjs/toolkit';
import { WordsApi } from 'services/api/wordsApi';

const getWords = createAsyncThunk(
  'words/getWords',
  async (data: { page: number; query: string }) => {
    const response = await WordsApi.getWords(data.page, data.query);
    return response;
  },
);

export { getWords };
