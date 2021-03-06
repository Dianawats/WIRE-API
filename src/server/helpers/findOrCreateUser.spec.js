const findOrCreateUser = require('./findOrCreateUser');

describe('#####FindOrCreateUser', () => {
  it('should create a user and a location ', async () => {
    const userLocation = {
      name: 'Narnia',
      centre: 'Nairobi',
      country: 'Kenya',
    };
    const userType = {
      email: 'diana.nyambura@andela.com',
      roleId: 3,
      username: 'Diana Nyambura',
    };
    const res = {
      status: () => {
        return {
          send: param => {
            return param;
          },
        };
      },
    };
    const createdUser = await findOrCreateUser(userType, userLocation, res);
    expect(createdUser[0].dataValues.username).toEqual('Diana Nyambura');
  });
});
