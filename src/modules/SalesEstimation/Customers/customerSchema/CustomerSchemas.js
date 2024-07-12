const { GraphQLSchema } = require("graphql");
const {
  UserQueryType,
  UserMutationType,
  CustomerQueryType,
} = require("./customerModels/customerQueryType");
const {
  CustomerMutationType,
} = require("./customerModels/customerMutationType");

const CustomerSchemas = new GraphQLSchema({
  query: CustomerQueryType,
  mutation: CustomerMutationType,
});

module.exports = CustomerSchemas;
