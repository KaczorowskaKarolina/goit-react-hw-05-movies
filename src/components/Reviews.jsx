import React, { useEffect, useState } from 'react';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=264ec641025fff32d6f5c8134722997b`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {/* Display the list of reviews */}
      {reviews.map((review) => (
        <div key={review.id}>{review.content}</div>
      ))}
    </div>
  );
};

export default Reviews;