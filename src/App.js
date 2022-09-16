import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Listing from './components/Listing'
import AdvertiseWithUs from './components/AdvertiseWithUs';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [selectedCategory, setCategory] = useState(JSON.parse(localStorage.getItem('selectedCategory')) || "4 Bedroom")




  useEffect(() => {
    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory))
  }, [selectedCategory])
  
  function handleCategoryChange(event)
  {
    console.log(event.target.value);
    setCategory(event.target.value);
  }

  return (
    <div>
      <Router >
        <Nav />
        {/* Hero Page? Maybe above buttons in listing? */}
        <Routes>
          <Route path='/'
            element={<Listing selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
            />}>
          </Route>
          <Route path='/Advertise'
            element={<AdvertiseWithUs/>}>
          </Route>
          <Route path='*'
            element={<NotFound/>}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
