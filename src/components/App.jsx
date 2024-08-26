import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import MoviePage from 'pages/MoviePage/MoviePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import CastList from './CastList/CastList';
import ReviewList from './ReviewList/ReviewList';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<ReviewList />} />
          </Route>
          {/* serves as the default error page or component when the path is not accessible */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
