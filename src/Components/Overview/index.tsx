import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import './Overview.sass';
import Search from './Search';
import Limiter from './Limiter';
import Navigation from './Navigation';
import SneakerTable from './SneakerTable';
import { useHistory } from 'react-router-dom';

const Overview = () => {
  const [sneakerData, setSneakerData] = useState<Sneaker[]>([]);
  const [sneakerCount, setSneakerCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState<string>();
  const [selectedSneakers, setSelectedSneakers] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    const getSneakerFromApi = async () => {
      try {
        const data = await api.getSneakers({ limit, page, name });
        setSneakerCount(data.count);
        setSneakerData(data.results);
      } catch (err) {
        console.error('SneakerDetails:getSneakerFromApi: ' + err);
      }
    };
    getSneakerFromApi();
  }, [page, limit, name]);

  const toggle = (sneakerId: string) => {
    if (selectedSneakers.includes(sneakerId)) {
      setSelectedSneakers((prevSelectedSneakers) => prevSelectedSneakers.filter((sneaker) => sneaker !== sneakerId));
    } else {
      setSelectedSneakers((prevSelectedSneakers) => [...prevSelectedSneakers, sneakerId]);
    }
  };

  const compare = () => {
    history.push({ pathname: '/compare', search: `?firstSneaker=${selectedSneakers[0]}&secondSneaker=${selectedSneakers[1]}` });
  };

  return (
    <>
      <div className="tools">
        <div>
          <Limiter setLimit={setLimit} />
          <button type="button" disabled={selectedSneakers.length !== 2} onClick={compare}>
            Compare
          </button>
        </div>
        <Search setName={setName} />
      </div>
      <SneakerTable sneakerData={sneakerData} selectedSneakers={selectedSneakers} toggle={toggle} />
      <Navigation page={page} limit={limit} sneakerCount={sneakerCount} setPage={setPage} />
    </>
  );
};

export default Overview;
