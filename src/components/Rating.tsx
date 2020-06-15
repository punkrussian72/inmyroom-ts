import React from 'react';
import starImage from "../assets/Star.png";

interface IRating {
  rating: string
}

const Rating = ({rating}: IRating) => {
  const stars = [];
  for (let starsCount = parseFloat(rating); starsCount >= 0.5; starsCount--) {
    stars.push((<img key={starsCount} src={starImage} alt="star" width='16'/>))
  }
  return (
    <span className="rating">
      {stars.map(star => star)}
      <div className="rate">{rating}</div>
      </span>
  );
};

export default Rating;