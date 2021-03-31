import React, { useState } from 'react';
import Search from '../Search';
import SneakerDetails from '../SneakerDetails';
import './Comparator.sass';

const Comparator = () => {
  const [firstSelectedSneaker, setFirstSelectedSneaker] = useState<string>('');
  const [secondSelectedSneaker, setSecondSelectedSneaker] = useState<string>('');

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
        <div className="sneakerLabels"></div>
        <div className="sneakerDetails">{firstSelectedSneaker && <SneakerDetails sneakerId={firstSelectedSneaker} />}</div>
        <div className="sneakerDetails">{secondSelectedSneaker && <SneakerDetails sneakerId={secondSelectedSneaker} />}</div>
      </div>
    </div>
  );
};

export default Comparator;
