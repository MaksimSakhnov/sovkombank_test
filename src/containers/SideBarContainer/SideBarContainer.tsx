import { useState } from 'react';
import SideBar from 'components/SideBar';
import { SideBarContainerProps } from './SideBarContainer.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SideBarContainer({ withFilters }: SideBarContainerProps) {
  const [searchValue, setSearchValue] = useState('');
  const onSearchSubmit = () => {
    setSearchValue('');
  };

  return (
    <SideBar
      searchValue={searchValue}
      onSearchSubmit={onSearchSubmit}
      onSearchChange={setSearchValue}
    />
  );
}
