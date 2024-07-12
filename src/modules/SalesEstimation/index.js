const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const CustomerSchemas = require("./Customers/customerSchema/CustomerSchemas");

router.use(
  "/customers",
  graphqlHTTP({
    schema: CustomerSchemas,
    graphiql: true,
  })
);

module.exports = router;
