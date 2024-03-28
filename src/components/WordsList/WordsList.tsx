import WordAccordeon from 'components/WordAccordeon';
import Loader from 'components/Loader';
import { WordsListProps } from './WordsList.type';
import { useCallback } from 'react';
import { Droppable } from 'react-beautiful-dnd';

export function WordsList({
  wordsData,
  pagination,
  isLoading,
  onAddToStarredClick,
  onRemoveFromStarredClick,
  withDraggable,
  hasFilters,
}: WordsListProps) {
  const renderContent = useCallback(() => {
    if (withDraggable) {
      return (
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              className={'basis-3/4 w-full'}
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? '#e6e6e6'
                  : undefined,
              }}
            >
              <div
                className={'w-full overflow-y-scroll'}
                style={{ height: 'calc(100vh - 10rem)' }}
              >
                {wordsData.map((el, index) => (
                  <WordAccordeon
                    data={el}
                    onAddToStarredClick={() => onAddToStarredClick(el)}
                    onRemoveFromStarredClick={() =>
                      onRemoveFromStarredClick(el)
                    }
                    withDraggable={true}
                    key={el.id}
                    index={index + 1}
                    hasFilters={hasFilters}
                  />
                ))}
                {isLoading && <Loader />}
              </div>
              {pagination}
            </div>
          )}
        </Droppable>
      );
    } else {
      return (
        <div className={'basis-3/4 w-full'}>
          <div
            className={'w-full overflow-y-scroll'}
            style={{ height: 'calc(100vh - 10rem)' }}
          >
            {wordsData.map((el) => (
              <WordAccordeon
                data={el}
                onAddToStarredClick={() => onAddToStarredClick(el)}
                onRemoveFromStarredClick={() => onRemoveFromStarredClick(el)}
                key={el.id}
              />
            ))}
            {isLoading && <Loader />}
          </div>
          {pagination}
        </div>
      );
    }
  }, [
    isLoading,
    onAddToStarredClick,
    onRemoveFromStarredClick,
    pagination,
    withDraggable,
    wordsData,
  ]);

  return renderContent();
}
