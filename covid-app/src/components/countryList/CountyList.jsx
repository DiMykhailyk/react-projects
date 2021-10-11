import React from 'react';
import { CountryRow } from '../countryRow/CountryRow';

export const CountryList = ({listOfCountries}) => {

  const mock = {
    Country: 'Country',
    TotalConfirmed: "TotalConfirmed"
  }
 
  return (
    <div>
      <CountryRow 
      index='№'
      countryInfo={mock}
      />
      {listOfCountries.map((country,i)=>(  
        <CountryRow 
        key={country.ID} 
        index={i+1} 
        countryInfo={country}
        />
        )
      )
      } 
    </div>
  )
}