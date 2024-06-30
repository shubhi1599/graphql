const express = require('express');
const { buildSchema } = require('graphql');

//This is the middleware which wil response for any graphql query
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = buildSchema(`
    type Query {
        description: String,
        price: Float
    }
`);

const root = {
    description: "Red Shoe",
    price: 42.0
};

//just like any middleware we will place this middleware here.
/** This graphql is a function which takes an argument that will configure that how graphql will respond */

/** To make our API useful it is imp to place rootValueto give values as an output, and also we will 
 * tell at whoch endpoint our grapgql will respond.
*/
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const port = 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
