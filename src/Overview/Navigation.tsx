import React, { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
  page: number;
  limit: number;
  sneakerCount: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Navigation = ({ page, limit, sneakerCount, setPage }: NavigationProps) => {
  const previousPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (page < sneakerCount) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div>
        Showing {page * limit + 1} to {page * limit + limit} of {sneakerCount} entries
      </div>
      <div>
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="button" disabled={true}>
          {page + 1}
        </button>
        {[page + 1, page + 2, page + 3, page + 4, page + 5].map((pageNavigation) => (
          <button key={pageNavigation} type="button" onClick={() => setPage(pageNavigation)}>
            {pageNavigation + 1}
          </button>
        ))}
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Navigation;
