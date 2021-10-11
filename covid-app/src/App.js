import './styles/App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Header } from './components/header/Header'
import { CountryList } from './components/countryList/CountyList';

function App() {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortedCountries, setSortedCountries] = useState('');

  useEffect(() => {
    axios("https://api.covid19api.com/summary")
      .then(
        (res) => {
          setListOfCountries(res.data.Countries)
        }
      )
  }, [])

  const SortedByValue = (a, b) => {
    switch (sortedCountries.toLowerCase()) {
      case 'deaths':
        return  b.TotalDeaths - a.TotalDeaths
      case 'total confirmed':
        return  b.TotalConfirmed - a.TotalConfirmed 
      case 'total recovery':
        return  b.TotalRecovered - a.TotalRecovered 
      default : return
    }
  }

  const filteredCountries = listOfCountries
    .filter(({ Country }) => {
      return Country.toLowerCase().includes(searchValue) 
      || Country.includes(searchValue) 
      || Country.toUpperCase().includes(searchValue) 
    })
    .sort(SortedByValue) 

  return (
    <div className="App">
      <Header
        sortedListFn={setSortedCountries}
        onChangeSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <CountryList listOfCountries={filteredCountries} />
    </div>
  );
}

export default App;
