
let movies =[
    {
        id: 0,
        name:"Avengers",
        score: 18

    },
    {
        id: 1,
        name:"Saw",
        score: 20

    }];

export const getMovies = () =>movies;

export const deleteMovie = id =>{
    const cleanedMovies = movies.filter(movie=> movie.id === id)
    if(movies.length>cleanedMovies.length){
        movies=cleanedMovies;
        return true;
    }else{
        return false;
    }
};

export const getById = id =>{
    const filteredMovies=movies.filter(movie=>movie.id===id)
    return filteredMovies[0]
};

export const addMovie=(name,score)=>{
    const newMovie={
        id: movies.length+,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};