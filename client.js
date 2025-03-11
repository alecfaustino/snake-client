const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // print to console as soon as connection is made
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: AF");
  });
  // conn.on("connect", () => {
  //   setTimeout(() => conn.write("Move: up"), 50);
  //   setTimeout(() => conn.write("Move: up"), 50);
  //   setTimeout(() => conn.write("Move: up"), 50);
  // });
  
  // logs the data right before the idle disconnection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;