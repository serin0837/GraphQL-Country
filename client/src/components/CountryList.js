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
        <Query query ={COUNTRY_QUERY}>
          {
            ({loading, error, data}) => {
                if(loading) return <h3>Loading...</h3>
                if(error) console.log(error)
                console.log(data.countries)
                return(
                  <div>
                    <h1 className ="display-7 my-3">{data.countries.length} Countries in the world</h1>
                    <div  className ="m-auto d-flex flex-wrap justify-content-center">
                    {
                      data.countries.map(country => {
                      return <Country key ={country.alpha2Code} country ={country}/>
                      })
                    }
                    </div>
                </div>
                )
            }
          }
        </Query>
      </div>
    );
  }
}

export default CountryList;
