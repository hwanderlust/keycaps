import React from 'react';

import BannerNewsletter from "./components/banner-newsletter";
import Footer from './components/footer';
import Header from "./components/header";
import './App.css';

/**
 TODO:
 * Replace button in <Footer/> when common button API is created
 * Connect store access via useContext API within <Header/> for shopping cart # of items
 * Default outline color to purple
 */

function App() {
  return (
    <div>
      <Header />
      <BannerNewsletter />
      <Footer />
    </div>
  );
}

export default App;
