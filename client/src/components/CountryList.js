import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo"
import Country from "./Country"

const COUNTRY_QUERY = gql`
  query CountryQuery {
    countries {
      name
      capital
      region
      subregion
      area
      population
      flag
      alpha2Code
    }
  }
`;


class CountryList extends Component {
  render() {
    return (
      <div>
        <h2 className ="display-5 my-3">Countries</h2>
        <Query query ={COUNTRY_QUERY}>
          {
            ({loading, error, data}) => {
                if(loading) return <h3>Loading...</h3>
                if(error) console.log(error)
                console.log(data.countries)
                return <div>
                  {
                    data.countries.map(country => {
                      <Country key ={country.alpha2Code} country ={country}/>
                    })
                  }
                </div>
            }
          }
        </Query>
      </div>
    );
  }
}

export default CountryList;
