import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './Components/Header/Head';
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer/Footer';
import Exclusive from './Components/List/Exclusive';
import News from './Components/List/News';
import NewsNFeature from './Components/List/NewsNFeature';
import PhonesNGadget from './Components/List/PhonesNGadgets';
import OSNReviews from './Components/List/OSNReviews';
import Apps from './Components/List/Apps';
import UserNav from './Components/Nav/UserNav';


function App() {
  return (
    <ChakraProvider>
      <Head/>
      <UserNav/>
      <Exclusive/>
      <NewsNFeature/>
      <PhonesNGadget/>
      <Apps/>
      <OSNReviews/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
