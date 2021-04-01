import React from 'react';
import Search from '../Search';
import SneakerDetails from '../SneakerDetails';
import './Comparator.sass';
import { useHistory, useLocation } from 'react-router-dom';

const Comparator = () => {
  const history = useHistory();
  const location = useLocation();
  const firstSneaker = new URLSearchParams(location.search).get('firstSneaker');
  const secondSneaker = new URLSearchParams(location.search).get('secondSneaker');

  const setFirstSelectedSneaker = (sneakerId: string) => {
    const secondSneakerParam = secondSneaker ? `&secondSneaker=${secondSneaker}` : '';
    history.push({ pathname: '/compare', search: `?firstSneaker=${sneakerId}${secondSneakerParam}` });
  };

  const setSecondSelectedSneaker = (sneakerId: string) => {
    const firstSneakerParam = firstSneaker ? `firstSneaker=${firstSneaker}&` : '';
    history.push({ pathname: '/compare', search: `?${firstSneakerParam}secondSneaker=${sneakerId}` });
  };

  return (
    <div className="comparator">
      <div className="searchFields">
        <div className="searchField">
          <Search onSelect={setFirstSelectedSneaker} submitButtonText="Search" />
        </div>
        <div className="searchField">
          <Search onSelect={setSecondSelectedSneaker} submitButtonText="Search" />
        </div>
      </div>
      <div className="compareContainer">
        {firstSneaker && <SneakerDetails sneakerId={firstSneaker} />}
        {secondSneaker && <SneakerDetails sneakerId={secondSneaker} />}
      </div>
    </div>
  );
};

export default Comparator;
