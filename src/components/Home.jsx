// import React, { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const Trending = React.lazy(() => import('./Trending'));
// const SearchMovies = React.lazy(() => import('./Movies'));
// const MovieDetails = React.lazy(() => import('./MovieDetails'));

// const Home = ({REACT_APP_API_KEY}) => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Trending apiKey={REACT_APP_API_KEY} />} />
//         <Route path="/movies" element={<SearchMovies apiKey={REACT_APP_API_KEY} />} />
//         <Route path="/movies/:movieId" element={<MovieDetails apiKey={REACT_APP_API_KEY} />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default Home;


// components/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ apiKey }) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );
        setTrending(response.data.results);
      } catch (error) {
        console.error('Error fetching trending data:', error.message);
      }
    };

    fetchTrending();
  }, [apiKey]);

  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {trending.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
