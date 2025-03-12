const terminalInput = process.argv.slice(2);
const initials = terminalInput[0];
const IP = 'localhost'
const PORT = 50541;
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

module.exports = {
  IP,
  PORT,
  keyMap,
  initials
};