const graphql=require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema
,GraphQLID,
GraphQLInt,
GraphQLList} = graphql;


// dummy data
var medias = [
    { title: 'SUN', description: 'Fantasy',image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '1',key:1 },
    { title: 'STAR', description: 'Fantasy', image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '2',key:1 },
    { title: 'JETEX', description: 'Sci-Fi',image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '3',key:1 },
    { title: 'JETEX', description: 'Sci-Fi',image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '3',key:1 },
    { title: 'JETEX', description: 'Sci-Fi',image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '3',key:1 },
    { title: 'JETEX', description: 'Sci-Fi',image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '3',key:1 },
    { title: 'JETEX', description: 'Sci-Fi',image:'C:\Amirthum\CATE00001\PROD00001_0.jpg', id: '3',key:1 },
];

var shows = [
    { name: 'CHITHI', time: 9, id: '1',mediasid:'1' },
    { name: 'CWC', time: 11,  id: '2',mediasid:'1' },
    { name: 'DT', time: 6, id: '3',mediasid:'3' },
];

const ShowType = new GraphQLObjectType({
    name: 'Show',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        time: { type: GraphQLInt },
        media:{
            type: MediaType,
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(medias, { id: parent.mediasid });
            }
        }
       
    })
});

const MediaType = new GraphQLObjectType({
    name: 'Media',
    fields: ( ) => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        image:{ type: GraphQLString },
        key: { type: GraphQLInt },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        media: {
            type: MediaType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(medias, { id: args.id });
            }
        },
        mediaslist: {
            type: new GraphQLList(MediaType),
            resolve(parent, args){
             //   console.log(parent.id)
                // code to get data from db / other source
                return _.filter(medias,{key:1});
            }
        },
        show: {
            type: ShowType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(shows, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});