import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import {
  ChakraProvider,
  VStack,
} from '@chakra-ui/react';

import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';

import './app.css'

function App() {
  return (
      <ChakraProvider>
        <VStack>
        <Router>
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>

          <Footer />
        </Router>
        </VStack>
      </ChakraProvider>
  );
}

export default App;
