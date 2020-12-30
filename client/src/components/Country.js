import React from 'react';

const Country = (props) => {
    console.log(props.country,"<-props")
    return (
        <div>
            <h2>{props.country.name}</h2>
        </div>
    );
};

export default Country;