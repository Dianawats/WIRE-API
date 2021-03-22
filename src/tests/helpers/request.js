/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const { server, socket } = require('../../index');
const { token } = require('../../server/middlewares/authentication');

const userToken = token({
  id: 3453,
  roleId: 3,
  username: 'Diana Nyambura',
});

module.exports = {
  sendRequest: (method, url, payload, callback, token) => {
    request(server)
      [method](url)
      .set('Authorization', token || userToken)
      .send(payload)
      .end((err, res) => {
        callback(err, res);
      });
  },
  serverSocket: socket,
  server,
};
