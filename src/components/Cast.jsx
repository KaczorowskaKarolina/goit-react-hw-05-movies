import React, { useEffect, useState } from 'react';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?REACT_APP_API_KEY`
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
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {/* Display the list of cast members */}
      {cast.map((member) => (
        <div key={member.id}>{member.name}</div>
      ))}
    </div>
  );
};

export default Cast;