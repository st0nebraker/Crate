import request from 'supertest'
import express from 'express'
import schema from '../../setup/schema'
import graphqlHTTP from 'express-graphql'

describe('product query', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      "/", 
      graphqlHTTP({
        schema: schema,
        graphiql: true
      })
    )
  })

  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns products with isSurvey: false", async () => {
    const response = await request(server)
    .get('/')
    .send({
      query: `{productWhenSurveyIsTrue(productSurvey: false){
      name
      id
      isSurvey
      }}`
    })
    .expect(200)
    console.log(response.body)
    expect(response.body.data.productWhenSurveyIsTrue.length).toEqual(8)
  })

  it("returns products with isSurvey: true", async () => {
    const response = await request(server)
      .get('/')
      .send({
        query: `{productWhenSurveyIsTrue(productSurvey: true){
      name
      id
      isSurvey
      }}`
      })
      .expect(200)
    console.log(response.body)
    expect(response.body.data.productWhenSurveyIsTrue.length).toEqual(0)
  })
})