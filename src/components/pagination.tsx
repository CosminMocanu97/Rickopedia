import { PaginationProps } from "../interfaces/paginationProps";
import {
  PaginationWrapper,
  Separator,
  PageItem,
  ActivePageItem,
} from "../styledComponents/pagination";

const Pagination = ({
  page,
  totalPages,
  handlePagination,
}: PaginationProps) => {
  return (
    <PaginationWrapper page={page} totalPages={totalPages}>
      {page !== 1 && (
        <>
          <PageItem onClick={() => handlePagination(page - 1)} type="button">
            &lt;
          </PageItem>

          <PageItem onClick={() => handlePagination(1)} type="button">
            {1}
          </PageItem>
        </>
      )}
      {page > 3 && <Separator>...</Separator>}

      {page === totalPages && totalPages > 3 && (
        <PageItem onClick={() => handlePagination(page - 2)} type="button">
          {page - 2}
        </PageItem>
      )}

      {page > 2 && (
        <PageItem onClick={() => handlePagination(page - 1)} type="button">
          {page - 1}
        </PageItem>
      )}

      {(page === 1 ||
        (page !== 1 && page !== totalPages) ||
        page === totalPages) && (
        <ActivePageItem onClick={() => handlePagination(page)} type="button">
          {page}
        </ActivePageItem>
      )}

      {page < totalPages - 1 && (
        <PageItem onClick={() => handlePagination(page + 1)} type="button">
          {page + 1}
        </PageItem>
      )}
      {page === 1 && totalPages > 3 && (
        <PageItem onClick={() => handlePagination(page + 2)} type="button">
          {page + 2}
        </PageItem>
      )}

      {page < totalPages - 2 && <Separator>...</Separator>}
      {page !== totalPages && (
        <>
          <PageItem onClick={() => handlePagination(totalPages)} type="button">
            {totalPages}
          </PageItem>

          <PageItem onClick={() => handlePagination(page + 1)} type="button">
            &gt;
          </PageItem>
        </>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
