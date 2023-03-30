import React from 'react';
import Movies from './components/Movies';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Main component that renders the app
function App() {
  // Create an array of movie objects
  const movies = [
    {
      name: 'Blade Runner 2049',
      year: '2017',
      rating: 'PG-13',
      image: 'https://tinyurl.com/ysttmref',
    },
    {
      name: 'Alien',
      year: '1979',
      rating: 'R',
      image: 'https://tinyurl.com/2a4bjm8j',
    },
    {
      name: 'Ghost in the Shell',
      year: '2017',
      rating: 'PG-13',
      image: 'https://tinyurl.com/4hwb7tc6',
    },
    {
      name: 'Akira',
      year: '1988',
      rating: 'PG-13',
      image: 'https://tinyurl.com/5n8bxtcz',
    },
    {
      name: 'Neon Genesis Evangelion: The End of Evangelion',
      year: '1997',
      rating: 'R',
      image: 'https://tinyurl.com/phm789mb',
    },
  ];

  return (
    // Using the Bootstrap grid system to create a fluid container
    <div className="container-fluid">
      {/* Render the app header component */}
      <Header />
      <div className="container">
        {/* Render the movies component and pass the movies array as a prop */}
        <Movies movies={movies} />
      </div>
      {/* Render the app footer component */}
      <Footer />
    </div>
  );
}

// Export the App component
export default App;
