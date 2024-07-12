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

const CustomerMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation",
  fields: () => ({
    insertCustomer: {
      type: CustomerType,
      description: "Insert a new user",
      args: {
        CustName: { type: GraphQLString },
        CustGender: { type: GraphQLString },
        HouseName: { type: GraphQLString },
        CustAddr1: { type: GraphQLString },
        CustAddr2: { type: GraphQLString },
        LandMark: { type: GraphQLString },
        CustPlace: { type: GraphQLString },
        CustCity: { type: GraphQLString },
        DistrictName: { type: GraphQLString },
        StateName: { type: GraphQLString },
        CountryName: { type: GraphQLString },
        CustPin: { type: GraphQLString },
        CustContPerson: { type: GraphQLString },
        CustContPhone: { type: GraphQLString },
        CustPhone: { type: GraphQLString },
        CustMob: { type: GraphQLString },
        CustEmail: { type: GraphQLString },
        CustFax: { type: GraphQLString },
        CustWebsite: { type: GraphQLString },
        CustRegDate: { type: GraphQLString },
        CustDefltTouch: { type: GraphQLString },
        CardNo: { type: GraphQLString },
        OpeningAmount: { type: GraphQLString },
        Created_by: { type: GraphQLString },
        Last_modified_by: { type: GraphQLString },
        Company_id: { type: GraphQLInt },
        Branch_id: { type: GraphQLInt },
        Counter_id: { type: GraphQLInt },
        IsActive: { type: GraphQLInt },
        TranferStatus: { type: GraphQLString },
        refID: { type: GraphQLInt },
        AreaId: { type: GraphQLInt },
        Panchayathid: { type: GraphQLInt },
        ReligionId: { type: GraphQLInt },
        CustPanNo: { type: GraphQLString },
        CustGstNo: { type: GraphQLString },
        VoucherTypeId: { type: GraphQLInt },
        careof: { type: GraphQLString },
        LedgerCreation: { type: GraphQLString },
        CustAdharno: { type: GraphQLString },
        Relationship: { type: GraphQLString },
        RelationName: { type: GraphQLString },
        PanType: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const newUser = await InsertCustomer(args);
          return newUser;
        } catch (error) {
          throw new Error("Failed to insert user: " + error.message);
        }
      },
    },
    updateCustomer: {
      type: CustomerType,
      description: "Update an existing user",
      args: {
        CustId: { type: new GraphQLNonNull(GraphQLInt) },
        CustName: { type: GraphQLString },
        CustGender: { type: GraphQLString },
        HouseName: { type: GraphQLString },
        CustAddr1: { type: GraphQLString },
        CustAddr2: { type: GraphQLString },
        LandMark: { type: GraphQLString },
        CustPlace: { type: GraphQLString },
        CustCity: { type: GraphQLString },
        DistrictName: { type: GraphQLString },
        StateName: { type: GraphQLString },
        CountryName: { type: GraphQLString },
        CustPin: { type: GraphQLString },
        CustContPerson: { type: GraphQLString },
        CustContPhone: { type: GraphQLString },
        CustPhone: { type: GraphQLString },
        CustMob: { type: GraphQLString },
        CustEmail: { type: GraphQLString },
        CustFax: { type: GraphQLString },
        CustWebsite: { type: GraphQLString },
        CustRegDate: { type: GraphQLString },
        CustDefltTouch: { type: GraphQLString },
        CardNo: { type: GraphQLString },
        OpeningAmount: { type: GraphQLString },
        Created_by: { type: GraphQLString },
        Last_modified_by: { type: GraphQLString },
        Company_id: { type: GraphQLInt },
        Branch_id: { type: GraphQLInt },
        Counter_id: { type: GraphQLInt },
        IsActive: { type: GraphQLInt },
        TranferStatus: { type: GraphQLString },
        refID: { type: GraphQLInt },
        AreaId: { type: GraphQLInt },
        Panchayathid: { type: GraphQLInt },
        ReligionId: { type: GraphQLInt },
        CustPanNo: { type: GraphQLString },
        CustGstNo: { type: GraphQLString },
        VoucherTypeId: { type: GraphQLInt },
        careof: { type: GraphQLString },
        LedgerCreation: { type: GraphQLString },
        CustAdharno: { type: GraphQLString },
        Relationship: { type: GraphQLString },
        RelationName: { type: GraphQLString },
        PanType: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const update = await updateCustomer(args);
          return update;
        } catch (error) {
          throw new Error("Failed to insert user: " + error.message);
        }
      },
    },
    deleteCustomer: {
      type: CustomerType,
      description: "Delete an existing user",
      args: {
        CustId: { type: new GraphQLNonNull(GraphQLInt) },
      },
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
