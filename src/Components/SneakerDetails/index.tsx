import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import './SneakerDetails.sass';
import fallbackImage from '../../assets/fallbackImage.jpg';

interface SneakerDetailsProps {
  sneakerId: string;
}

const SneakerDetails = ({ sneakerId }: SneakerDetailsProps) => {
  const [sneakerData, setSneakerData] = useState<Sneaker>();

  useEffect(() => {
    const getSneakerFromApi = async () => {
      try {
        const data = await api.getSneaker(sneakerId);
        setSneakerData(data.results[0]);
      } catch (err) {
        console.error("SneakerDetails:getSneakerFromApi: " + err);
      }
    };
    getSneakerFromApi();
  }, [sneakerId]);

  if (!sneakerData) {
    return null;
  }

  return (
    <div className="sneakerDetails">
      <div className="sneakerImage">
        <img src={sneakerData.media.smallImageUrl ? sneakerData.media.smallImageUrl : fallbackImage} alt={sneakerData.title} />
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Brand</div>
        <div className="sneakerField">{sneakerData.brand}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Colorway</div>
        <div>{sneakerData.colorway}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Gender</div>
        <div>{sneakerData.gender}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Name</div>
        <div>{sneakerData.name}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Release Date</div>
        <div>{sneakerData.releaseDate}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Retail Price</div>
        <div>{sneakerData.retailPrice}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Shoe</div>
        <div>{sneakerData.shoe}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Title</div>
        <div>{sneakerData.title}</div>
      </div>
      <div className="sneakerDataField">
        <div className="sneakerLabel">Year</div>
        <div>{sneakerData.year}</div>
      </div>
    </div>
  );
};

export default SneakerDetails;
