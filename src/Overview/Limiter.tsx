import React, { Dispatch, SetStateAction } from 'react';

interface LimiterProps {
  setLimit: Dispatch<SetStateAction<number>>;
}

const Limiter = ({ setLimit }: LimiterProps) => {
  return (
    <div>
      Show{' '}
      <select name="limit" onChange={(event) => setLimit(parseInt(event.target.value))}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>{' '}
      entries
    </div>
  );
};

export default Limiter;
