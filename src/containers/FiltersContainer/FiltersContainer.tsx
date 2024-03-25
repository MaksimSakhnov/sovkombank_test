import Filters from 'components/Filters';
import { useState } from 'react';

export function FiltersContainer() {
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

  return (
    <Filters
      adjectiveChecked={adjectiveChecked}
      verbChecked={verbChecked}
      nounChecked={nounChecked}
      handleChangeAdjectiveChecked={handleChangeAdjectiveChecked}
      handleChangeNounChecked={handleChangeNounChecked}
      handleChangeVerbChecked={handleChangeVerbChecked}
    />
  );
}
