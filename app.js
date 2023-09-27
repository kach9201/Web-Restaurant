const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema'); // Import the GraphQL schema you defined

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable the GraphiQL IDE for testing
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

