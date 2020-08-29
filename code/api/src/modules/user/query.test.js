import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import db from '../../setup/database';
import models from "../../setup/models";



describe('user queries', () => {
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
    });

    beforeEach(async () => {
        const user1 = {
            name: "User",
            email: "user@email.com",
            password: 12345,
            styleResult: null
        }
        const user2 = {
            name: "User2",
            email: "user2@email.com",
            password: 12345,
            styleResult: null
        }

        await models.User.create(user1);
        await models.User.create(user2);
    });

    afterEach(async () => {
        await models.User.destroy({ where: {} });
    });

    afterAll(() => {
        db.close();
    });

    it('returns all users', async () => {
        const response = await request(server)
            .get('/')
            .send({ query: '{users { email name }}'})
            .expect(200)
        
        // console.log(response.body.data)
        expect(response.body.data.users.length).toEqual(2)
    })

    it('can update user style', async () => {
        const user = await models.User.create({
            name: "User",
            email: "user@email.com",
            password: 12345,
            styleResult: null
        })
        const response = await request(server)
            .post('/')
            .send({
                query: `mutation {userUpdate(id: ${user.id}, styleResult: \"Neat\") {id styleResult}}`
            });
        expect(response.body.data.userUpdate.id).toEqual(user.id)
        expect(response.body.data.userUpdate.styleResult).toEqual('Neat')

        const testUser = await models.User.findOne({ where: { id: user.id } });
        expect(testUser.styleResult).toEqual('Neat')
        expect(testUser.name).toEqual('User')
        expect(testUser.email).toEqual('user@email.com')
    })
    
    it('returns one user by id', async () => {
        const user = await models.User.create({
            name: "User",
            email: "user@email.com",
            password: 12345,
            styleResult: null
        })
        const response = await request(server)
            .get('/')
            .send({query: `{ user(id: ${user.id}) { email name}}`})
            .expect(200)
        //console.log(response.body.data)
        expect(response.body.data.user.name).toEqual('User')
        expect(response.body.data.user.email).toEqual('user@email.com')
    })

    it('is true', () => {
        expect(true).toBe(true)
    })
})