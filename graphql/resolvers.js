
//resolvers.js
const patrick ={
    name:"pat",
    age: 18,
    gender: "male"
};


const resolvers ={
    Query: {
        person: ()=>patrick
    }
};

export default resolvers;