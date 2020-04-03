const {gql} = require('apollo-server');

const typeDefs = gql`
    type Item {
        name: String!
    }
    type Query {
        getItems: [Item]!
    }
`;

module.exports = typeDefs;
