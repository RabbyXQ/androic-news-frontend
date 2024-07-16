import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './Components/Header/Head';
import { ChakraBaseProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraBaseProvider>
      <Head/>
    </ChakraBaseProvider>
  );
}

export default App;
