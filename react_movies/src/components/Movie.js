import React from 'react';

// Component that renders a movie with its name, year, rating, and image
const Movie = ({ movie }) => {
  // If there is no movie, don't render anything
  if (!movie) {
    return null;
  }

  return (
    // Create a div with the class "Movie" and align text to center
    <div className="Movie text-center">
      {/* Display the movie image if it exists */}
      {movie.image && (
        <img src={movie.image} alt={movie.name} />
      )}
      {/* Display the movie name with a white text and neon blue text shadow */}
      <h2 style={{color: '#fff', textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00e6e6, 0 0 70px #00e6e6, 0 0 80px #00e6e6, 0 0 100px #00e6e6, 0 0 150px #00e6e6'}}>
        {movie.name}
      </h2>
      {/* Display the movie year in white text */}
      <p style={{color: '#fff'}}>Year: {movie.year}</p>
      {/* Display the movie rating in white text */}
      <p style={{color: '#fff'}}>Rating: {movie.rating}</p>
    </div>
  );
};

export default Movie;
