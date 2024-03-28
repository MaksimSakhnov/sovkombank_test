import { MouseEvent, useCallback, useState } from 'react';
import useIsLiked from 'hooks/useIsLiked';
import { WordAccordeonProps } from './WordAccordeon.type';
import MoveIcon from 'assets/icons/move.svg';
import MoveDisabledIcon from 'assets/icons/moveDisabled.svg';
import styles from './WordAccordeon.module.scss';
import { Draggable } from 'react-beautiful-dnd';

export function WordAccordeon({
  data,
  onRemoveFromStarredClick,
  onAddToStarredClick,
  withDraggable,
  index,
  hasFilters,
}: WordAccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isLiked = useIsLiked(data.id);

  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (isLiked) {
        onRemoveFromStarredClick();
      } else {
        onAddToStarredClick();
      }
    },
    [isLiked, onAddToStarredClick, onRemoveFromStarredClick],
  );

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const renderContent = useCallback(() => {
    if (withDraggable && index) {
      return (
        <Draggable
          key={data.id}
          draggableId={data.id.toString()}
          index={index}
          isDragDisabled={hasFilters}
        >
          {(provided) => (
            <div
              className={`rounded-md mb-5 bg-white  shadow-md px-4  py-2 ${isOpen ? styles.open : ''}`}
              onClick={toggleOpen}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={provided.draggableProps.style}
            >
              <div className={'w-full flex  items-center justify-between'}>
                <div className={'flex gap-3 items-center'}>
                  <img
                    src={hasFilters ? MoveDisabledIcon : MoveIcon}
                    alt=""
                    className={`w-4 h-4 translate-y-0.5`}
                  />
                  <div className={'text-xl font-bold block'}>{data.word}</div>
                </div>

                <button
                  className={`text-2xl ${isLiked ? 'text-blue-500' : 'text-black'}`}
                  onClick={onClick}
                >
                  ★
                </button>
              </div>

              <div className={styles.content}>
                <div className={'italic text-xl'}>{data.pos}</div>
                <div className={'text-xl'}>{data.level}</div>
              </div>
            </div>
          )}
        </Draggable>
      );
    } else {
      return (
        <div
          className={`rounded-md mb-5 bg-white  shadow-md px-4  py-2 ${isOpen ? styles.open : ''}`}
          onClick={toggleOpen}
        >
          <div
            className={'w-full flex align-middle  items-center justify-between'}
          >
            <div className={'text-2xl font-bold'}>{data.word}</div>

            <button
              className={`text-2xl ${isLiked ? 'text-blue-500' : 'text-black'}`}
              onClick={onClick}
            >
              ★
            </button>
          </div>

          <div className={styles.content}>
            <div className={'italic text-xl'}>{data.pos}</div>
            <div className={'text-xl'}>{data.level}</div>
          </div>
        </div>
      );
    }
  }, [
    data.id,
    data.level,
    data.pos,
    data.word,
    hasFilters,
    index,
    isLiked,
    isOpen,
    onClick,
    withDraggable,
  ]);

  return renderContent();
}
