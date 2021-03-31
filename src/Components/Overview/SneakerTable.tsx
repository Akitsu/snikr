import React from 'react';
import fallbackImage from '../../assets/fallbackImage.jpg';

interface SneakerTableProps {
  sneakerData: Sneaker[];
}

const SneakerTable = ({ sneakerData }: SneakerTableProps) => {
  return (
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
  );
};

export default SneakerTable;
