interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  style?:{}
}

const Pagination = (props: PaginationProps) => {
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
      style={props.style}
    >
      <button
        className="pagination-previous"
        disabled={props.currentPage == 1}
        onClick={(e: any) => props.setCurrentPage(props.currentPage - 1)}
      >
        Poprzednia strona
      </button>
      <button
        className="pagination-next"
        disabled={props.currentPage == props.totalPages}
        onClick={(e: any) => props.setCurrentPage(props.currentPage + 1)}
      >
        Następna strona
      </button>
      <ul className="pagination-list">
        {props.currentPage > 1 && props.currentPage - 1 !== 1 && (
          <li>
            <button
              className="pagination-link"
              aria-label="Goto page 1"
              onClick={(e: any) => props.setCurrentPage(1)}
            >
              1
            </button>
          </li>
        )}
        {props.currentPage - 1 > 2 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {props.currentPage > 1 && (
          <li>
            <button
              className="pagination-link"
              aria-label={`Goto page ${props.currentPage - 1}`}
              onClick={(e: any) => props.setCurrentPage(props.currentPage - 1)}
            >
              {props.currentPage - 1}
            </button>
          </li>
        )}
        <li>
          <button
            className="pagination-link is-current"
            aria-label={`Page ${props.currentPage}`}
            aria-current="page"
          >
            {props.currentPage}
          </button>
        </li>
        {props.currentPage < props.totalPages && (
          <li>
            <button
              className="pagination-link"
              aria-label={`Goto page ${props.currentPage + 1}`}
              onClick={(e: any) => props.setCurrentPage(props.currentPage + 1)}
            >
              {props.currentPage + 1}
            </button>
          </li>
        )}
        {props.currentPage + 1 < props.totalPages - 1 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {props.currentPage < props.totalPages &&
          props.totalPages !== props.currentPage + 1 && (
            <li>
              <button
                className="pagination-link"
                aria-label={`Goto page ${props.totalPages}`}
                onClick={(e: any) => props.setCurrentPage(props.totalPages)}
              >
                {props.totalPages}
              </button>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Pagination;
