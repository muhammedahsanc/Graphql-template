const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const UserType = require("../customerTypes/customerTypes");
const { pool } = require("../../../../../../config/db");
const { getAllCustomers } = require("../customerResolver/CustomerResolver");
const CustomerType = require("../customerTypes/customerTypes");

const CustomerQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    getCustomers: {
      type: new GraphQLList(CustomerType),
      description: "Get list of users",
      resolve: async () => {
        try {
          const data = await getAllCustomers();
          return data;
        } catch (error) {
          throw new Error("Failed to fetch customers");
        }
      },
    },
  }),
});

module.exports = {
  CustomerQueryType,
  // UserMutationType,
};
