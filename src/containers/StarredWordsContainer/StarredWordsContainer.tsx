import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import {
  selectFilteredFavoriteWords,
  selectHasFilters,
  wordsActions,
} from 'store/words';
import useSaveStarredValues from 'hooks/useSaveStarredValues';
import WordsList from 'components/WordsList';
import { IWord } from 'store/words/types';
import { STARRED_VALUES } from '../../constants/constants';

const reorder = (list: Array<IWord>, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function StarredWordsContainer() {
  const dispatch = useAppDispatch();
  useSaveStarredValues();
  const favoriteWords = useSelector(selectFilteredFavoriteWords);
  const hasFilters = useSelector(selectHasFilters);

  const [items, setItems] = useState<Array<IWord>>([]);

  const onAddToStarredClick = (word: IWord) => {
    dispatch(wordsActions.addToStarred(word));
  };

  const onRemoveFromStarredClick = (word: IWord) => {
    dispatch(wordsActions.removeFromStarred(word));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index - 1,
      result.destination.index - 1,
    ).filter((el) => el !== undefined);

    setItems(newItems);
    localStorage.setItem(STARRED_VALUES, JSON.stringify(newItems));
  };

  useEffect(() => {
    setItems(favoriteWords);
  }, [favoriteWords]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <WordsList
        wordsData={items}
        onAddToStarredClick={onAddToStarredClick}
        onRemoveFromStarredClick={onRemoveFromStarredClick}
        withDraggable={true}
        hasFilters={hasFilters}
      />
    </DragDropContext>
  );
}
