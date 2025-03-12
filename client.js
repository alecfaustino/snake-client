const net = require("net");
const { IP, PORT, initials } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // print to console as soon as connection is made
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    //if no initials are passed as a command line arg
    if (!initials) {
      console.log('Joining as UNK (unknown). Add initials to command line to identify yourself!');
      conn.write('Name: UNK');
    }
    conn.write(`Name: ${initials}`);
  });
  
  // logs the data right before the idle disconnection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect,
};