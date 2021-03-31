import React from 'react';
import './SearchFieldResults.sass';
import fallbackImage from '../../assets/fallbackImage.jpg';

interface SearchFieldResultsProps {
  sneakerResults: Sneaker[];
  onClick: (sneakerId: string) => void;
}

const SearchFieldResults = ({ sneakerResults, onClick }: SearchFieldResultsProps) => {
  return (
    <div className="dropdown">
      {sneakerResults.map((sneakerResult, index) => {
        return (
          <div className="sneakerContainer" key={sneakerResult.id} tabIndex={index} onClick={() => onClick(sneakerResult.id)}>
            <div className="sneakerThumbnail">
              <img src={sneakerResult.media.thumbUrl ? sneakerResult.media.thumbUrl : fallbackImage} alt={sneakerResult.title} />
            </div>
            <div className="sneakerInfo">
              <div className="sneakerBrand">{sneakerResult.brand}</div>
              <div className="sneakerTitle">{sneakerResult.title}</div>
              <div className="sneakerColorway">{sneakerResult.colorway}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchFieldResults;
