import React from 'react';

import BannerNewsletter from "./components/banner-newsletter";
import Footer from './components/footer';
import Header from "./components/header";
import './App.css';

import Slides from "./components/slides";

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
      <Slides
        imgs={{
          0: "https://cdn.shopify.com/s/files/1/1994/3097/products/gmk-amethyst-haus-leftfull_640x361.png?v=1605053105",
          1: "https://cdn.shopify.com/s/files/1/1994/3097/products/gmk-amethyst-double-haus_640x361.png?v=1605053140",
          2: "https://cdn.shopify.com/s/files/1/1994/3097/products/deskmat-core_640x360.png?v=1605052553",
          3: "https://cdn.shopify.com/s/files/1/1994/3097/products/deskmat-dark-alpha_640x360.png?v=1605052554",
          4: "https://cdn.shopify.com/s/files/1/1994/3097/products/1.core_640x360.png?v=1605053165",
          5: "https://cdn.shopify.com/s/files/1/1994/3097/products/2.dark-alpha_640x360.png?v=1605053178",
          6: "https://i.mydramalist.com/wKZDJf.jpg",
        }} />
      <BannerNewsletter />
      <Footer />
    </div>
  );
}

export default App;
