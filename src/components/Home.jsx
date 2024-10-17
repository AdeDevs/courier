// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our Courier Service
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your packages, delivered with care.
      </Typography>
      <Link to="/admin">
        <Button variant="contained" color="primary">
          Go to Admin Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default Home;
