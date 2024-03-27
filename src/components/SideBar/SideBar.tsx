import Search from 'components/Search';
import Checkbox from 'components/Checkbox';
import { SideBarProps } from './SideBar.type';

export function SideBar({
  searchValue,
  onSearchChange,
  handleChangeVerbChecked,
  handleChangeAdjectiveChecked,
  handleChangeNounChecked,
  adjectiveChecked,
  nounChecked,
  verbChecked,
}: SideBarProps) {
  return (
    <div
      className={
        'rounded-md w-auto h-full flex flex-col basis-1/4 bg-slate-200 py-5 px-5'
      }
    >
      <Search value={searchValue} onChange={onSearchChange} />
      <Checkbox
        onChange={handleChangeAdjectiveChecked}
        value={adjectiveChecked}
        label={'adjective'}
      />
      <Checkbox
        onChange={handleChangeVerbChecked}
        value={verbChecked}
        label={'verb'}
      />
      <Checkbox
        onChange={handleChangeNounChecked}
        value={nounChecked}
        label={'noun'}
      />
    </div>
  );
}
