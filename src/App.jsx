import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="background">
      <main className="mx-3">
        <Outlet />
      </main>
      </div>
      <Footer />
    </>
  );
}

export default App;