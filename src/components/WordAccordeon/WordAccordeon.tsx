import { MouseEvent, useState } from 'react';
import useIsLiked from 'hooks/useIsLiked';
import { WordAccordeonProps } from './WordAccordeon.type';
export function WordAccordeon({
  data,
  onRemoveFromStarredClick,
  onAddToStarredClick,
}: WordAccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isLiked = useIsLiked(data.id);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isLiked) {
      onRemoveFromStarredClick();
    } else {
      onAddToStarredClick();
    }
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={'rounded-md mb-5 bg-white  shadow-md px-4  py-2'}
      onClick={toggleOpen}
    >
      <div className={'w-full flex align-middle  items-center justify-between'}>
        <div className={'text-2xl font-bold'}>{data.word}</div>

        <button
          className={`text-2xl ${isLiked ? 'text-blue-500' : 'text-black'}`}
          onClick={onClick}
        >
          ★
        </button>
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
