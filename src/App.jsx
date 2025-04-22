import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contacts from './pages/Contacts';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 0;
`;

function App() {
  return (
      <AppWrapper>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Main>
        <Footer />
      </AppWrapper>
  );
}

export default App; 