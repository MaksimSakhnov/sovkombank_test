export type SideBarProps = {
  onSearchChange: (arg: string) => void;
  searchValue: string;
  handleChangeAdjectiveChecked: () => void;
  handleChangeVerbChecked: () => void;
  handleChangeNounChecked: () => void;
  adjectiveChecked: boolean;
  nounChecked: boolean;
  verbChecked: boolean;
};
