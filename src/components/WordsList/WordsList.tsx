import { WordsListProps } from './WordsList.type';
import WordAccordeon from 'components/WordAccordeon';

export function WordsList({ wordsData, handleScroll }: WordsListProps) {
  return (
    <div
      className={'basis-3/4 w-full overflow-y-scroll'}
      onScroll={handleScroll}
      style={{ height: 'calc(100vh - 10rem)' }}
    >
      {wordsData.map((el) => (
        <WordAccordeon data={el} />
      ))}
    </div>
  );
}
