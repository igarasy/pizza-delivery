import React from 'react';
import Header from '../components/header';
import Button from '../components/button';
import { useNavigate } from 'react-router';
import { usePizzaService } from '../components/usePizzaService';

const Home = () => {
  return (
    <>
      <Header />
      <Button>
        <a href="second-step">Peça uma Pizza</a>
      </Button>
    </>
  );
};

export default Home;
