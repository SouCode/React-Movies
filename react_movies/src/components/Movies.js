import React from 'react';
import { Card } from 'react-bootstrap';

// Component that renders a row of movie cards
const Movies = ({ movies }) => {
  return (
    /* Im Using Bootstrap grid system to create a row of cards with 3 columns on medium screens and larger */
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {movies.map((movie) => (
        /* Use the movie name as a key and create a column for each movie */
        <div key={movie.name} className="col">
          {/* Create a card with a dark background and light text */}
          <Card bg="dark" text="light">
            {/* Display the movie image at the top of the card */}
            <Card.Img variant="top" src={movie.image} alt={movie.name} />
            {/* Display the movie name and text at the bottom of the card */}
            <Card.Body>
              {/* Style the movie name with a light blue color */}
              <Card.Title style={{color: '#00e6e6'}}>{movie.name}</Card.Title>
              <Card.Text>
                <p style={{color: '#fff'}}>
                  {/* Display the movie year and rating in white text */}
                  <strong>Year:</strong> {movie.year}
                  <br />
                  <strong>Rating:</strong> {movie.rating}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Movies;
