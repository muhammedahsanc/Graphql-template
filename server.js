const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");
const { poolConnect, pool } = require("./config/db");

const app = express();
const port = 5050;

// Define the schema
const UserType = new GraphQLObjectType({
  name: "User",
  description: "User",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: async (user) => {
        const [rows] = await pool.query(
          "SELECT * FROM books WHERE userId = ?",
          [user.id]
        );
        return rows;
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "Book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    userId: { type: GraphQLNonNull(GraphQLInt) },
    user: {
      type: UserType,
      resolve: async (book) => {
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
          book.userId,
        ]);
        return rows[0];
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    books: {
      type: new GraphQLList(BookType),
      description: "Get list of books",
      resolve: async () => {
        const [rows] = await pool.query("SELECT * FROM books");
        return rows;
      },
    },
    book: {
      type: BookType,
      description: "Get a single book",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [
          args.id,
        ]);
        return rows[0];
      },
    },
    users: {
      type: new GraphQLList(UserType),
      description: "Get list of users",
      resolve: async () => {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows;
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation",
  fields: () => ({
    createBook: {
      type: BookType,
      description: "Create a new book",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        const result = await pool.query(
          "INSERT INTO books (name, userId) VALUES (?, ?)",
          [args.name, args.userId]
        );
        const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [
          result[0].insertId,
        ]);
        return rows[0];
      },
    },
  }),
});

// Create GraphQL schema
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// Initialize and start the server
async function init() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to MySQL!");
    connection.release();

    app.listen(port, () => {
      console.log(`The server is 44444444 on port ${port}!!!`);
    });
  } catch (err) {
    console.error("Error connecting to MySQL or running query:", err);
  }
}

init();

module.exports = { pool };
