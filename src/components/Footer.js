import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    textAlign: 'center',
    marginTop: 'auto',
  },
  text: {
    color: '#ffffff',
  },
};

export default Footer;
