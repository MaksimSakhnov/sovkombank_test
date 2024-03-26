import { useState } from 'react';
import { WordAccordeonProps } from './WordAccordeon.type';
export function WordAccordeon({ data }: WordAccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={'rounded-md mb-5 bg-white  shadow-md px-4  py-2'}
      onClick={toggleOpen}
    >
      <div className={'w-full flex align-middle '}>
        <div className={'text-2xl font-bold'}>{data.word}</div>
      </div>

      {isOpen && (
        <div>
          <div className={'italic text-xl'}>{data.pos}</div>
          <div className={'text-xl'}>{data.level}</div>
        </div>
      )}
    </div>
  );
}
