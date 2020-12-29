const axios = require("axios");

const {GraphQLSchema,GraphQLObjectType,GraphQLFloat, GraphQLInt, GraphQLString,GraphQLBoolean,GraphQLList,GraphQLID,Gra} = require("graphql")


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
        area: { type: GraphQLFloat},
        flag: { type: GraphQLString},
        alpha2Code: {type: GraphQLString}
         // languages: {  type: LanguageType},
    })
})


// const LanguageType = new GraphQLObjectType({
//     name: "Language",
//     fields:()=>({
//         iso639_1: {type:GraphQLString},
//         name: {type:GraphQLString},
//         nativeName: {type:GraphQLString}
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
        // language: {
        //     type: new GraphQLList(LanguageType),
        //     args:{
        //         iso639_1:{ type: GraphQLString}
        //     },
        //     resolve(parent, args){
        //         return axios.get(`https://restcountries.eu/rest/v2/lang/${args.iso639_1}`)
        //         .then(res => res.data) //in graphiql error but console check okay /
        //     }
        // },
        region: {
            type: new GraphQLList(CountryType),
            args:{
                region:{ type: GraphQLString}
            },
            resolve(parent, args){
                return axios.get(`https://restcountries.eu/rest/v2/region/${args.region}`)
                .then(res => res.data) 
            }
        },
    }
})


module.exports =  new GraphQLSchema({
    query : RootQuery
})




    // "languages": [
    //     {
    //         "iso639_1": "sq",
    //         "iso639_2": "sqi",
    //         "name": "Albanian",
    //         "nativeName": "Shqip"
    //     }
    // ],
    // "languages": [
    //     {
    //         "iso639_1": "ps",
    //         "iso639_2": "pus",
    //         "name": "Pashto",
    //         "nativeName": "پښتو"
    //     },
    //     {
    //         "iso639_1": "uz",
    //         "iso639_2": "uzb",
    //         "name": "Uzbek",
    //         "nativeName": "Oʻzbek"
    //     },
    //     {
    //         "iso639_1": "tk",
    //         "iso639_2": "tuk",
    //         "name": "Turkmen",
    //         "nativeName": "Türkmen"
    //     }
    // ],