import { GraphQLClient } from "graphql-request";

const graphqlClient = new GraphQLClient(
  "https://analytics-api.herokuapp.com/analytics"
);

export default graphqlClient;
