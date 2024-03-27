import { client } from './axios';
import { IWordsResponse } from './types';

export const WordsApi = {
  async getWords(page: number, query: string) {
    const response = await client.get<IWordsResponse>(
      `/words?page=${page}${query}`,
    );
    return response.data;
  },
};
