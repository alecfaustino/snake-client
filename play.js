const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect(); // store this into a variable to pass as argument into the setupInput function
setupInput(conn);