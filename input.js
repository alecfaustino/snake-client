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

  if (data === "\u0003") {
    process.exit();
  }
  const keyMap = {
    'w': 'Move: up',
    'a': 'Move: left',
    's': 'Move: down',
    'd': 'Move: right',
    '\u001b[A': 'Move: up',
    '\u001b[B': 'Move: down',
    '\u001b[D': 'Move: left',
    '\u001b[C': 'Move: right',
    '1': 'Say: mmm!',
    '2': 'Say: you stole my lunch!',
    '3': 'Say: good job!',
    '4': 'Say: That is mine!'
  };


  if (keyMap[data]) {
    connection.write(keyMap[data]);
  }
};

module.exports = {
  setupInput,
  handleUserInput,
};