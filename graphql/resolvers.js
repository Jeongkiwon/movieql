
//resolvers.js
const people =[
{
    id: 0,
    name:"pat",
    age: 18,
    gender: "male"
},
{
    id: 1,
    name:"rick",
    age: 20,
    gender: "female"
}];


const resolvers ={
    Query: {
        people: ()=>people
    }
};

export default resolvers;