import React from 'react';
import styles from './ProductRating.module.scss';

const ProductRating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < roundedRating;
    return (
        <svg key={index} className={`${styles.star} ${isFilled ? styles.filled : ''}`}  height="26" viewBox="0 0 512 512" width="26" xmlns="http://www.w3.org/2000/svg"><path width="24" height="24"  d="m496 203.3h-183.64l-56.36-171.3-56.36 171.3h-183.64l150.21 105.4-58.5 171.3 148.29-106.16 148.29 106.16-58.61-171.3z"/></svg>
    )
  });

  return <div className={styles.rating}>{stars}</div>;
};

export default ProductRating;
