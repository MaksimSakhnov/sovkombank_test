import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { wordsActions } from 'store/words';
import SideBar from 'components/SideBar';
import useDebounce from 'hooks/useDebounce';
import { generateQueryString } from 'helpers/generateQueryString';
import { SideBarContainerProps } from './SideBarContainer.type';

export function SideBarContainer({ withFilterStarred }: SideBarContainerProps) {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [adjectiveChecked, setAdjectiveChecked] = useState(false);
  const [verbChecked, setVerbChecked] = useState(false);
  const [nounChecked, setNounChecked] = useState(false);

  const handleChangeAdjectiveChecked = () => {
    setAdjectiveChecked((prev) => !prev);
  };

  const handleChangeVerbChecked = () => {
    setVerbChecked((prev) => !prev);
  };

  const handleChangeNounChecked = () => {
    setNounChecked((prev) => !prev);
  };

  useEffect(() => {
    if (!withFilterStarred) {
      const query = generateQueryString(
        debouncedSearchValue as string,
        adjectiveChecked,
        verbChecked,
        nounChecked,
      );
      dispatch(wordsActions.setQueryString(query));
    } else {
      dispatch(
        wordsActions.setFilteredFavoriteWords({
          search: debouncedSearchValue as string,
          adjectiveChecked: adjectiveChecked,
          verbChecked: verbChecked,
          nounChecked: nounChecked,
        }),
      );
    }
  }, [
    adjectiveChecked,
    dispatch,
    nounChecked,
    debouncedSearchValue,
    verbChecked,
    withFilterStarred,
    searchValue,
  ]);

  return (
    <SideBar
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      handleChangeAdjectiveChecked={handleChangeAdjectiveChecked}
      nounChecked={nounChecked}
      adjectiveChecked={adjectiveChecked}
      verbChecked={verbChecked}
      handleChangeNounChecked={handleChangeNounChecked}
      handleChangeVerbChecked={handleChangeVerbChecked}
    />
  );
}
