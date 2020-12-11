const axios = require("axios");
const {GraphQLSchema,GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLBoolean,GraphQLList} = require("graphql")


//Country
const CountryType = new GraphQLObjectType({
    name:"Country",
    fields:()=>({
        name: { type: GraphQLString},
        capital: { type: GraphQLString},
        region: { type: GraphQLString},
        subregion: { type: GraphQLString},
        population: { type: GraphQLInt},
        // latlng : {type: RocketType}array type how to?
        area: { type: GraphQLInt},
        // timezones: ["UTC-05:00"],
        // "languages": [{
        //     "iso639_1": "es",
        //     "iso639_2": "spa",
        //     "name": "Spanish",
        //     "nativeName": "Español"
        // }],
        flag: { type: GraphQLString},
    })
})

// const RocketType = new GraphQLObjectType({
//     name:"Rocket",
//     fields:()=>({
//         rocket_id: { type: GraphQLString},
//         rocket_name: { type: GraphQLString},
//         rocket_type: { type: GraphQLString},
//     })
// })

//root query
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        countries:{
            type: new GraphQLList(CountryType),
            resolve(parent, args){
                return axios.get("https://restcountries.eu/rest/v2/all")
                .then(res => res.data)
            }
        },
        //single country
        country: {
            type: CountryType,
            args:{
                name:{ type: GraphQLString}
            },
            resolve(parent, args){
                return axios.get(`https://restcountries.eu/rest/v2/name/${args.name}`)
                .then(res => res.data);
            }
        },
        // rockets:{
        //     type: new GraphQLList(RocketType),
        //     resolve(parent, args){
        //         return axios.get("https://api.spacexdata.com/v3/rockets")
        //         .then(res => res.data)
        //     }
        // },
        //single launch
        // rocket: {
        //     type: RocketType,
        //     args:{
        //         id:{ type: GraphQLInt}
        //     },
        //     resolve(parent, args){
        //         return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
        //         .then(res => res.data);
        //     }
        // }
    }
})



module.exports =  new GraphQLSchema({
    query : RootQuery
})