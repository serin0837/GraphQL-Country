const axios = require("axios");
const {GraphQLSchema,GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLBoolean,GraphQLList,GraphQLID} = require("graphql")


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
        alpha2Code: {type: GraphQLString}
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
                alpha2Code:{ type: GraphQLString}
            },
            resolve(parent, args){
                return axios.get(`https://restcountries.eu/rest/v2/alpha/${args.alpha2Code}`)
                .then(res => res.data) //in graphiql error but console check okay //but can not fileter 
            }
        },
        region: {
            type: CountryType,
            args:{
                region:{ type: GraphQLString}
            },
            resolve(parent, args){
                return axios.get(`https://restcountries.eu/rest/v2/region/${args.region}`)// can not show only with country name something like that
                .then(res => console.log(res.data));
            }
        },
    }
})


//what data?
//all country // one country information// country depend on region // country depend on language
//front end - select the country you have been and add in mongoDB// 


module.exports =  new GraphQLSchema({
    query : RootQuery
})