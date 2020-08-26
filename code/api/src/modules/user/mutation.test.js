import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import db from '../../setup/database';
import models from '../../setup/models'


describe('user mutations', () => {
  let server;
  beforeAll(() => {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  it('can update user style', async () => {
    const user =  await models.User.create({
      name: "User",
      email: "user@email.com",
      password: 12345
    })
    const response = await request(server)
      .post('/')
      .send({
        query: `mutation {userUpdate(id: ${user.id}, styleResult: \"Neat\") {id styleResult}}`
    });
    expect(response.body.data.userUpdate.id).toEqual(user.id)
    expect(response.body.data.userUpdate.styleResult).toEqual('Neat')

    // expect(user.styleResult).toEqual('Neat')
    const testUser = await models.User.findOne({where: {id: user.id }});
    expect(testUser.styleResult).toEqual('Neat')
  })
})