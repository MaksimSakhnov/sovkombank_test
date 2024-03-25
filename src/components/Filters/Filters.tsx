import Checkbox from 'components/Checkbox';
import { FiltersProps } from './Filters.type';

export function Filters({
  adjectiveChecked,
  handleChangeVerbChecked,
  handleChangeNounChecked,
  handleChangeAdjectiveChecked,
  verbChecked,
  nounChecked,
}: FiltersProps) {
  return (
    <>
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
    </>
  );
}
