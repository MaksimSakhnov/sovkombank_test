import Pagination from 'components/Pagination';
import { PaginationContainerProps } from './PaginationContainer.type';

export function PaginationContainer({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationContainerProps) {
  const onNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const onLastPageClick = () => {
    setCurrentPage(totalPages);
  };

  const onPrevPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const onFirstClick = () => {
    setCurrentPage(1);
  };

  return (
    <Pagination
      onNextPageClick={onNextPageClick}
      onLastPageClick={onLastPageClick}
      onFirstClick={onFirstClick}
      onPrevPageClick={onPrevPageClick}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
