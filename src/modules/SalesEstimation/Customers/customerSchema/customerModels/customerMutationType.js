const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const UserType = require("../customerTypes/customerTypes");
const CustomerType = require("../customerTypes/customerTypes");
const {
  InsertCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../customerResolver/CustomerResolver");
const {
  insertCustomerArgs,
  updateCustomerArgs,
  deleteCustomerArgs,
} = require("../customerArgsType/customerArgsType");

const CustomerMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation",
  fields: () => ({
    insertCustomer: {
      type: CustomerType,
      description: "Insert a new user",
      args: insertCustomerArgs,
      resolve: async (parent, args) => {
        try {
          const data = await InsertCustomer(args);
          return data;
        } catch (error) {
          throw new Error("Failed to insert user: " + error.message);
        }
      },
    },
    updateCustomer: {
      type: CustomerType,
      description: "Update an existing customer",
      args: updateCustomerArgs,
      resolve: async (parent, args) => {
        try {
          const updatedCustomer = await updateCustomer(args);
          return updatedCustomer;
        } catch (error) {
          throw new Error("Failed to update customer: " + error.message);
        }
      },
    },
    deleteCustomer: {
      type: CustomerType,
      description: "Delete an existing user",
      args: deleteCustomerArgs,
      resolve: async (parent, { CustId }) => {
        try {
          const deletedCustomer = await deleteCustomer(CustId);
          return deletedCustomer;
        } catch (error) {
          throw new Error("Failed to insert user: " + error.message);
        }
      },
    },
  }),
});

module.exports = {
  CustomerMutationType,
};
