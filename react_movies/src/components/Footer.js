import React from 'react';
import { Container } from 'react-bootstrap';

// Component that renders the app footer
const Footer = () => {
  return (
    // Bootstrap classes to create a dark footer
    <footer className="bg-dark text-center">
      <Container>
        {/* Using inline styles to create white text in the footer */}
        <p style={{color: '#fff'}}>&copy; Ronsou's Favorite Cyberpunk Movies</p>
      </Container>
    </footer>
  );
};

// Export the Footer component
export default Footer;
