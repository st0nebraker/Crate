import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import db from '../../setup/database';


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
    })
    // afterAll(() =>{

    // })

    // it('returns all users', async () => {
    //     const response = await request(server)
    //         .get('/')
    //         .send({ query: '{users { email name }}'})
    //         .expect(200)
        
    //     // console.log(response.body.data)
    //     expect(response.body.data.users.length).toEqual(2)
    // })

    it('returns one user by id', async () => {
        const response = await request(server)
            .get('/')
            .send({query: '{ user(id: 2) { email name}}'})
            .expect(200)
        //console.log(response.body.data)
        expect(response.body.data.user.name).toEqual('The User')
        expect(response.body.data.user.email).toEqual('user@crate.com')
    })

    it('is true', () => {
        expect(true).toBe(true)
    })
})