import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <h1>Authentication App</h1>
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;