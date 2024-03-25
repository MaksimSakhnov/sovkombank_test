import FiltersContainer from 'containers/FiltersContainer';
import Search from 'components/Search';
import { SideBarProps } from './SideBar.type';

export function SideBar({
  searchValue,
  onSearchSubmit,
  onSearchChange,
}: SideBarProps) {
  return (
    <div
      className={
        'rounded-md w-auto h-auto flex flex-col basis-1/4 bg-slate-200 py-5 px-5'
      }
    >
      <Search
        value={searchValue}
        onChange={onSearchChange}
        onClick={onSearchSubmit}
      />
      <FiltersContainer />
    </div>
  );
}
