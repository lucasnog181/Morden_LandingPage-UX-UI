
//import Articles from './components/articles/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
//import Features from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';

import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibility from './containers/possibility/Possibility';
import WthatGPT3 from './containers/whatGPT3/WhatGPT3';


import './App.css'


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WthatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

