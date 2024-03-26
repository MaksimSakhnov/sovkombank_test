import { client } from './axios';
import { IWordsResponse } from './types';

export const WordsApi = {
  async getWords(page: number) {
    const response = await client.get<IWordsResponse>(`/words?page=${page}`);
    return response.data;
  },
};
