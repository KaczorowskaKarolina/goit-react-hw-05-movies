// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('./components/Home'));
// const Movies = lazy(() => import('./components/Movies'));
// const MovieDetails = lazy(() => import('./components/MovieDetails'));
// const Cast = lazy(() => import('./components/Cast'));
// const Reviews = lazy(() => import('./components/Reviews'));

// const apiKey= process.env.REACT_APP_API_KEY;
// const response = await axios.get(
// `https://api.themoviedb.org/3/movie/?key=${apiKey}q=${keyword}&per_page=12&page=${page}`,)

//   // https://api.themoviedb.org/3/movie/550?api_key
  
// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route exact path="*" element={<Home apiKey="264ec641025fff32d6f5c8134722997b" />} />
//           <Route exact path="/movies" element={<Movies apiKey="264ec641025fff32d6f5c8134722997b" />} />
//           <Route exact path="/movies/:movieId" element={<MovieDetails apiKey="264ec641025fff32d6f5c8134722997b" />} />
//           <Route exact path="/movies/:movieId/cast" element={<Cast apiKey="264ec641025fff32d6f5c8134722997b" />} />
//           <Route exact path="/movies/:movieId/reviews" element={<Reviews apiKey="264ec641025fff32d6f5c8134722997b" />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;


import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);

  useEffect(() => {
  console.log('API Key:', apiKey);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/?api_key=${apiKey}&query=someDefaultValue&per_page=12&page=1`
      );
      console.log(result.data); // Use the data or remove this line if not needed
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  fetchData();
}, [apiKey]);


  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<Home apiKey={apiKey} />} />
          <Route path="/movies" element={<Movies apiKey={apiKey} />} />
          <Route path="/movies/:movieId" element={<MovieDetails apiKey={apiKey} />} />
          <Route path="/movies/:movieId/cast" element={<Cast apiKey={apiKey} />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews apiKey={apiKey} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
