import WordAccordeon from 'components/WordAccordeon';
import Loader from 'components/Loader';
import { WordsListProps } from './WordsList.type';

export function WordsList({
  wordsData,
  pagination,
  isLoading,
  onAddToStarredClick,
  onRemoveFromStarredClick,
}: WordsListProps) {
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
