import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './reviews.css';

const Reviews = ({ apiKey, movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        );

        if (response.status !== 200) {
          throw new Error('Failed to fetch reviews');
        }

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, [apiKey, movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
