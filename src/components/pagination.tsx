
import classNames from "classnames";
import { PaginationProps } from "../interfaces/paginationProps";
import { PaginationWrapper } from "../styledComponents/pagination";

const Pagination = ({
  page,
  totalPages,
  handlePagination,
}: PaginationProps) => {
  return (
    <PaginationWrapper>
      {page !== 1 && (
        <button
          onClick={() => handlePagination(page - 1)}
          type="button"
          className="pageItem"
        >
          &lt;
        </button>
      )}
      <button
        onClick={() => handlePagination(1)}
        type="button"
        className={classNames("pageItem", {
          active: page === 1,
        })}
      >
        {1}
      </button>
      {page > 3 && <div className="separator">...</div>}
      {page === totalPages && totalPages > 3 && (
        <button
          onClick={() => handlePagination(page - 2)}
          type="button"
          className="pageItem"
        >
          {page - 2}
        </button>
      )}
      {page > 2 && (
        <button
          onClick={() => handlePagination(page - 1)}
          type="button"
          className="pageItem"
        >
          {page - 1}
        </button>
      )}
      {page !== 1 && page !== totalPages && (
        <button
          onClick={() => handlePagination(page)}
          type="button"
          className={["pageItem", "active"].join(" ")}
        >
          {page}
        </button>
      )}
      {page < totalPages - 1 && (
        <button
          onClick={() => handlePagination(page + 1)}
          type="button"
          className="pageItem"
        >
          {page + 1}
        </button>
      )}
      {page === 1 && totalPages > 3 && (
        <button
          onClick={() => handlePagination(page + 2)}
          type="button"
          className="pageItem"
        >
          {page + 2}
        </button>
      )}
      {page < totalPages - 2 && <div className="separator">...</div>}
      <button
        onClick={() => handlePagination(totalPages)}
        type="button"
        className={classNames("pageItem", {
          active: page === totalPages,
        })}
      >
        {totalPages}
      </button>
      {page !== totalPages && (
        <button
          onClick={() => handlePagination(page + 1)}
          type="button"
          className="pageItem"
        >
          &gt;
        </button>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
