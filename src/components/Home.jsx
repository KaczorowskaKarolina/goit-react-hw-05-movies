import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css';

const Home = ({ apiKey }) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        setTrending(response.data.results);
      } catch (error) {
        console.error('Error fetching trending data:', error.message);
      }
    };

    fetchTrending();
  }, [apiKey]);

  return (
    <div className="home_container">
      <h2 className="home_h2">Trending Today</h2>
      <ul className="home_ul">
        {trending.map((item) => (
          <li className="home_li" key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
          </li>
        ))}
      </ul>
</div>
  );
};

export default Home;