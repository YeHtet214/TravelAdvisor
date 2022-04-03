import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Container } from "@material-ui/core";

import { getPlacesData, getWeatherData } from "./api";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [childClicked, setChildClicked] = useState('');

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, []);

  useEffect(() => {
    const filtered = places.filter(place => Number(place.rating) > Number(rating))
    setFilteredPlaces(filtered)
  }, [rating])

  useEffect(() => {
    if ( bounds.ne && bounds.sw ) {
      setIsLoading(true);

      getWeatherData(coordinates.lat, coordinates.lng)
        .then(data => setWeatherData(data))

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data?.filter(place => place.name && place.num_reviews));
          setFilteredPlaces([]);
          setIsLoading(false);
        });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} >
        <Grid item xs="12" md="4" >
          <List
            places={ filteredPlaces.length ? filteredPlaces : places} 
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs="12" md="8">
          <Map 
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={ filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
