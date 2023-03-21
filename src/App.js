import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/Layout/Footer';
import Navbar from '../src/components/Layout/Navbar';
import Home from '../src/components/pages/Home';
import NotFound from '../src/components/pages/NotFound';
import SearchPage from '../src/components/pages/SearchPage';
import SingleMovie from '../src/components/pages/SingleMovie';
import Search from '../src/components/Layout/Search';
import Favourites from '../src/components/pages/Favourites';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem('watchList')) || []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setShowSearch={setShowSearch} watchList={watchList} />
        <Search showSearch={showSearch} setShowSearch={setShowSearch} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path='/' element={<Home setWatchList={setWatchList} watchList={watchList} />} />
          <Route path='/search/:query' element={<SearchPage setCurrentPage={setCurrentPage} currentPage={currentPage} setWatchList={setWatchList} watchList={watchList} />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/favourites' element={<Favourites watchList={watchList} setWatchList={setWatchList} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
