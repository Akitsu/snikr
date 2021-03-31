import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import './Overview.sass';
import Search from './Search';
import Limiter from './Limiter';
import Navigation from './Navigation';
import SneakerTable from './SneakerTable';

const Overview = () => {
  const [sneakerData, setSneakerData] = useState<Sneaker[]>([]);
  const [sneakerCount, setSneakerCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState<string>();

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

  return (
    <>
      <div className="tools">
        <Limiter setLimit={setLimit} />
        <Search setName={setName} />
      </div>
      <SneakerTable sneakerData={sneakerData} />
      <Navigation page={page} limit={limit} sneakerCount={sneakerCount} setPage={setPage} />
    </>
  );
};

export default Overview;
