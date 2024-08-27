import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#home" style={styles.navItem}>Home</a></li>
          <li><a href="#about" style={styles.navItem}>About</a></li>
          <li><a href="#contact" style={styles.navItem}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#61dafb',
    fontSize: '2em',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 15px',
  }
};

export default Header;
