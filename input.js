let connection; // setting this variable up to accept the returned object from the connection function.
const setupInput = function(conn) {
  connection = conn; // assign the passed argument to the global variable so we can use it here.
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = (data) => {
  // if the key is control + C, exit.
  if (data === "\u0003") {
    process.exit();
  }

  if (data === "w") {
    connection.write("Move: up");
  }

  if (data === "a") {
    connection.write("Move: left");
  }

  if (data === "s") {
    connection.write("Move: down");
  }

  if (data === "d") {
    connection.write("Move: right");
  }
};

module.exports = {
  setupInput,
  handleUserInput,
};