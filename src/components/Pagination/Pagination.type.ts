export type PaginationProps = {
  currentPage: number;
  onNextPageClick: () => void;
  onLastPageClick: () => void;
  onPrevPageClick: () => void;
  onFirstClick: () => void;
  totalPages: number;
};
