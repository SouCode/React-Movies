import React from 'react';

// Component that renders the app header
function Header() {
  return (
    //  Bootstrap classes to create a responsive header
    <header className="mb-4">
      {/* Using Bootstrap classes to create a dark navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* inline styles to create neon-colored text in the app name */}
          <a className="navbar-brand" href="/">
            <span style={{color: '#00e6e6'}}>C</span>yber<span style={{color: '#00e6e6'}}>P</span>unk <span style={{color: '#00e6e6'}}>M</span>ovies
          </a>
        </div>
      </nav>
    </header>
  );
}

// Export the Header component
export default Header;
