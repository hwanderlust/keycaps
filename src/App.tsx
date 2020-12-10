import React from 'react';

import Footer from './components/footer';
import Header from "./components/header";
import './App.css';

/**
 TODO:
 * Replace button in <Footer/> when common button API is created
 * Continue with building out <Breadcrumbs/>
 * Default outline color to purple
 */

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
