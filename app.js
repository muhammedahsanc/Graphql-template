const { poolConnect } = require("./config/db");
const express = require("express");
const router = require("./src/modules/SalesEstimation/index");

const app = express();
const port = 25060;

app.use("/SalesEstimstion", router);

// Initialize and start the server
async function init() {
  try {
    await poolConnect();

    app.listen(port, () => {
      console.log(`The server is running on port ${port}!!!`);
    });
  } catch (err) {
    console.error("Error connecting to MySQL or running query:", err);
  }
}

init();
