import React from 'react';
//add more information about country 
const Country = (props) => {
    return (
        <div className="card border-info m-3" style ={{ maxWidth:"18rem"}}>
            <h2 className="card-header">{props.country.name}</h2>
             <div className="card-body">
                <h3 className="card-title">{props.country.capital}</h3>
                <img src={props.country.flag} alt={props.country.name} style ={{ maxWidth:"15rem"}}/>
                <p className="card-text"> Area: {props.country.area} </p>
                <p className="card-text"> Population: {props.country.population} </p>
            </div> 
        </div>
    );
};

export default Country;