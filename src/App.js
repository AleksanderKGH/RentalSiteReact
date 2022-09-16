import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Listings from './components/Listings'
import AdvertiseWithUs from './components/AdvertiseWithUs';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [selectedCategory, setCategory] = useState(JSON.parse(localStorage.getItem('selectedCategory')) || "4 Bedroom")

  const [listingsData, setListingsData] = useState(
    [
      {
        id: 1,
        address: "123 Main Street",
        bedrooms: 4,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 2,
        address: "21 Main Street",
        bedrooms: 4,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 3,
        address: "13 Main Street",
        bedrooms: 1,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 4,
        address: "32 East Main Street",
        bedrooms: 2,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 5,
        address: "19 Elm Street",
        bedrooms: 4,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 6,
        address: "56 Second Street",
        bedrooms: 4,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 7,
        address: "3 Center Street",
        bedrooms: 2,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 8,
        address: "32 Center Street",
        bedrooms: 1,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 9,
        address: "23 Center Street",
        bedrooms: 1,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 10,
        address: "20 Center Street",
        bedrooms: 3,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 11,
        address: "2 Center Street",
        bedrooms: 3,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      },
      {
        id: 12,
        address: "74 Center Street",
        bedrooms: 3,
        description: "Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture rolfing, non-duality sacredintegration highercosmicforce yogic empoweringmessages co-op chiaseeds nature meditation, papasan seaweedtempeh shamanicjourney soothingvibrations occupy reverseosmosis aquarius."
      }]);

  useEffect(() => {
    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory))
  }, [selectedCategory])
  
  function handleCategoryChange(event)
  {
    console.log(event.target.value);
    setCategory(event.target.value);
    /* Do SQL query change and modify our stored listings and setlistingsData to it */
  }

  return (
    <div>
      <Router >
        <Nav />
        {/* Hero Page? Maybe above buttons in listing? */}
        <Routes>
          <Route path='/'
            element={<Listings selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
              listingsData={listingsData}
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
