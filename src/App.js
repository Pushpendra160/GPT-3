
import Navbar from './components/navbar/Navbar';
// import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Cta from './components/cta/Cta';
// import Feature from './components/feature/Feature';
import './App.css';
import {Footer, Blog, Header, Possibility, WhatGPT3,Features} from './containers'
function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
