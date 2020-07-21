import React, {useEffect, useState} from 'react';
import starImage from "../assets/Star.png";

interface IRating {
  rating: string
}

const Rating = ({rating}: IRating) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const starsRating = [];
    for (let starsCount = parseFloat(rating); starsCount >= 0.5; starsCount--) {
      starsRating.push((<img key={starsCount} src={starImage} alt="star" width='16'/>))
    }
    setStars(starsRating);
  }, [rating]);
  return (
    <span className="rating">
      {stars.map(star => star)}
      <div className="rate">{rating}</div>
      </span>
  );
};

export default Rating;