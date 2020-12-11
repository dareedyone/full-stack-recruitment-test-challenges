import React, { useState, useEffect } from 'react';
import Header from '../Header';

import STYLES from './App.scss';
import FlightCard from '../FlightCard';
import itinaryService from '../../services/itinary.service';
import legsService from '../../services/leg.service';
import helperUtils from '../../utils/helper.utils';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [itineraries, setItineraries] = useState([]);
  // const [legs, seTlegs] = useState([]);

  useEffect(() => {
    (async function() {
      const legs = await legsService.get();
      const dictionariedLegs = helperUtils.makeDictionary(legs);
      const itineraries = await itinaryService.get();
      const populatedItineraries = helperUtils.populateLegs(
        itineraries,
        dictionariedLegs,
      );
      console.log(populatedItineraries);
      setItineraries(populatedItineraries);
    })();
  }, []);
  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {itineraries.map(i => (
          <FlightCard key={i.id} itinerary={i} />
        ))}
      </main>
    </div>
  );
};

export default App;
