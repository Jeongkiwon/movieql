
//add to schema.graphql
type Mutation{
    addMovie(name: String!, score:Int!): Movie!

}

//resolvers.js
import {getMovies, getById, addMovie} from "./db";
const resolvers ={
    Query: {
        movies: ()=>getMovies(),
        movie: (_,{id})=>getById(id)
    },
    Mutation:{
        addMovie:(_, {name, score})=>addMovie(name,score)
    },
};

export default resolvers;

//add to db.js
export const addMovie=(name,score)=>{
    const newMovie={
        id: movies.length+1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};