export interface IWord {
  id: number;
  word: string;
  pos: string;
  level: string;
  definition_url: string;
  voice_url: string;
}

export interface IFiltersInFavoriteWords {
  search: string;
  adjectiveChecked: boolean;
  verbChecked: boolean;
  nounChecked: boolean;
}
