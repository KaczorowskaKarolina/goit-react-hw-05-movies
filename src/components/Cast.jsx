import React, { useEffect, useState } from 'react';

const Cast = ({ apiKey, movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch cast details');
        }

        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast details:', error.message);
      }
    };

    fetchCast();
  }, [movieId, apiKey]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map((member) => (
        <div key={member.id}>{member.name}</div>
      ))}
    </div>
  );
};

export default Cast;