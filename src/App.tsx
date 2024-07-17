import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './Components/Header/Head';
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Head/>
    </ChakraProvider>
  );
}

export default App;
