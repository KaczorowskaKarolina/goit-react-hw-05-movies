// import React, { useEffect, useState, Suspense } from 'react';
// import { Route, Routes, useParams } from 'react-router-dom';
// import axios from 'axios';

// const Cast = React.lazy(() => import('./Cast'));
// const Reviews = React.lazy(() => import('./Reviews'));

// const MovieDetails = ({ REACT_APP_API_KEY }) => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}`
//         );

//         if (!response.ok) {
//           throw new Error('Failed to fetch movie details');
//         }

//         const data = await response.json();
//         setMovieDetails(data);
//       } catch (error) {
//         console.error('Error fetching movie details:', error.message);
//       }
//     };

//     fetchMovieDetails();
//   }, [REACT_APP_API_KEY, movieId]);

//   return (
//     <div>
//       {movieDetails ? (
//         <div>
//           <h2>{movieDetails.title}</h2>
//           <p>{movieDetails.overview}</p>
//           {/* Display other details as needed */}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="cast" element={<Cast apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
//           <Route path="reviews" element={<Reviews apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default MovieDetails;

import React, { useEffect, useState, Suspense } from 'react';
import { Route, Routes, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const MovieDetails = ({ REACT_APP_API_KEY }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }

        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [REACT_APP_API_KEY, movieId]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
          <Route path="reviews" element={<Reviews apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;