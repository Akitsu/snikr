import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import './Overview.sass';
import fallbackImage from '../assets/fallbackImage.jpg';
import Search from './Search';
import Limiter from './Limiter';
import Navigation from './Navigation';

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
      <div className="table">
        <div className="tableHead">
          <div className="tableRow">
            <div className="tableCell"></div>
            <div className="tableCell">Name</div>
            <div className="tableCell">Brand</div>
            <div className="tableCell">Gender</div>
            <div className="tableCell">Retail Price</div>
            <div className="tableCell">Release Date</div>
          </div>
        </div>
        <div className="tableBody">
          {sneakerData.length > 0 &&
            sneakerData.map((sneaker) => (
              <div className="tableRow" key={sneaker.id}>
                <div className="tableCell">
                  <img src={sneaker.media.thumbUrl ? sneaker.media.thumbUrl : fallbackImage} alt={sneaker.title} />
                </div>
                <div className="tableCell">{sneaker.title}</div>
                <div className="tableCell">{sneaker.brand}</div>
                <div className="tableCell">{sneaker.gender}</div>
                <div className="tableCell">{sneaker.retailPrice}</div>
                <div className="tableCell">{sneaker.releaseDate}</div>
              </div>
            ))}
        </div>
      </div>
      <Navigation page={page} limit={limit} sneakerCount={sneakerCount} setPage={setPage} />
    </>
  );
};

export default Overview;
