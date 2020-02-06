"use strict";

const net = require("net");

const choosePort = (portInitial, host, callback) => {
  const server = net.createServer(socket => {
    socket.pipe(socket);
  });

  server.listen(portInitial, host);

  server.on("error", () => {
    choosePort(portInitial + 1, host, newPort => callback(newPort));
  });

  server.on("listening", () => {
    server.close();
    callback(portInitial);
  });
};

choosePort(8000, "127.0.0.1", port => {
  console.log(port);
});

module.exports = choosePort;
