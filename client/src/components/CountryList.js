import React, { Component } from 'react';
import axios from "axios"

class CountryList extends Component {
    state = {
        countries: [],
        isLoading: true,
      };

      componentDidMount() {
        axios
          .get(`https://country-back.herokuapp.com/api/countries`)
          .then(({ data }) => {
            this.setState({ countries: data, isLoading: false });
          });
      }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CountryList;