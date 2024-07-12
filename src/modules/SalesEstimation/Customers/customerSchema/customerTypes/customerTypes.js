const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    status: { type: GraphQLInt },
    CustId: { type: GraphQLInt },
    CustName: { type: GraphQLString },
    HouseName: { type: GraphQLString },
    CustGender: { type: GraphQLString },
    CustAddr1: { type: GraphQLString },
    CustAddr2: { type: GraphQLString },
    LandMark: { type: GraphQLString },
    CustPlace: { type: GraphQLString },
    CustCity: { type: GraphQLString },
    DistrictName: { type: GraphQLString },
    StateName: { type: GraphQLString },
    CountryName: { type: GraphQLString },
    CustContPerson: { type: GraphQLString },
    CustContPhone: { type: GraphQLString },
    CustPhone: { type: GraphQLString },
    CustMob: { type: GraphQLString },
    CustEmail: { type: GraphQLString },
    CustWebsite: { type: GraphQLString },
    CustRegDate: { type: GraphQLString },
    CustDefltTouch: { type: GraphQLString },
    CardNo: { type: GraphQLString },
    OpeningAmount: { type: GraphQLString },
    CustPanNo: { type: GraphQLString },
    careof: { type: GraphQLString },
    LedgerCreation: { type: GraphQLString },
    CustAdharno: { type: GraphQLString },
    Relationship: { type: GraphQLString },
    RelationName: { type: GraphQLString },
    PanType: { type: GraphQLString },

    Created_date: { type: GraphQLString },
    DateName: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});

module.exports = CustomerType;
