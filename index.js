'use strict';

const net = require('net');

/**
 * Choose an available port
 * @param  {Number} portInitial Initial port
 * @param  {String} host Host
 * @param  {function} callback Callback
 */
const choosePort = (portInitial, host, callback) => {
  const server = net.createServer(socket => {
    socket.pipe(socket);
  });

  server.listen(portInitial, host);

  server.on('error', () => {
    choosePort(portInitial + 1, host, newPort => callback(newPort));
  });

  server.on('listening', () => {
    server.close();
    callback(portInitial);
  });
};

/**
 * Choose async an available port
 * @param  {Number} portInitial Initial port
 * @param  {String} host Host
 */
const choosePortSync = (portInitial, host) => {
  let port;

  choosePort(portInitial, host, newPort => {
    port = newPort;
  });

  require('deasync').loopWhile(() => !port);

  return port;
};

module.exports = choosePort;
module.exports.choosePort = choosePort;
module.exports.choosePortSync = choosePortSync;
