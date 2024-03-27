import { PaginationProps } from './Pagination.type';
import styles from './Pagination.module.scss';

export function Pagination({
  currentPage,
  onNextPageClick,
  onLastPageClick,
  onPrevPageClick,
  onFirstClick,
  totalPages,
}: PaginationProps) {
  return (
    <div className={'w-full flex flex-row gap-2 items-center'}>
      <button
        className={styles.pagination_button}
        disabled={currentPage === 1}
        onClick={onFirstClick}
      >
        first
      </button>
      <button
        className={styles.pagination_button}
        disabled={currentPage === 1}
        onClick={onPrevPageClick}
      >
        prev
      </button>
      <div className={'text-xl'}>{currentPage}</div>
      <button
        className={styles.pagination_button}
        disabled={totalPages === currentPage}
        onClick={onNextPageClick}
      >
        next
      </button>
      <button
        className={styles.pagination_button}
        disabled={totalPages === currentPage}
        onClick={onLastPageClick}
      >
        last
      </button>
    </div>
  );
}
