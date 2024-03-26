import { useAppDispatch } from 'store';
import { useEffect, useState, UIEvent } from 'react';

import { useSelector } from 'react-redux';
import { getWords, selectIsLoading, selectWordsData } from 'store/words';
import { WordsList } from 'components/WordsList/WordsList';
import { IWord } from 'store/words/types';

export function WordsListContainer() {
  const dispatch = useAppDispatch();
  const wordsData = useSelector(selectWordsData);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Array<IWord>>([]);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    dispatch(getWords({ page: currentPage }));
  }, [currentPage, dispatch]);

  useEffect(() => {
    // Отображаем только видимые элементы
    const containerHeight = window.innerHeight - 100;
    const itemHeight = 20; // Высота каждого элемента
    const itemsPerPage = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + itemsPerPage + 20, wordsData.length);

    setVisibleItems(wordsData.slice(startIndex, endIndex));
  }, [scrollTop, wordsData]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (
      !isLoading &&
      scrollTop + clientHeight >= scrollHeight - 100 &&
      scrollTop > 0
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    setScrollTop(scrollTop);
  };

  return <WordsList wordsData={visibleItems} handleScroll={handleScroll} />;
}
