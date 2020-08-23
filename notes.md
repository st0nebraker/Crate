# Server Side Testing With Jest and Supertest

If this were a Rails API
    - Endpoint tests
    - Model tests(User, product, etc)
    - queries/mutations(create, update destroy)
    - CRUD(resolvers)

- resolver does the work to actually do something
- today focus on endpoint testing

**Goal By 11:30**
- test user queries (get all users) (users)
- test single user by id (user)

## Jest and Supertest
- Jest simple to setup
    - test will continue to run as you make changes (similar to rails)
    - this is option --watch
- Supertest is a framework to make http requests and built in functionality to get graphql tested

## JEST Setup

`yarn add --dev jest`

`npm install --save-dev jest`

`npm test`

` "test":"jest"` add this to scripts

`"test":"jest --watch"` automatically run test with change

## Writing the tests
- jest will run any file that ends with `.test.js`
- file can live anywhere
- when we do endpoint test, we want to:
    - verify the status
    - assertions about the content, data that we're getting back
- what do I need in dev setup that I need to mimic in test (what currently exists in my express app)
- look at index.js
- could search `express()` to see what express is called
-  if you see a variable that is imported from somewhere else, just highlight that variable and press f12 and it will take you right to that page. This might just be a vs code thing though, not sure
-ex6 syntax

## Error Messages

`TypeError: Cannot read property 'database' of undefined`

- dont have test env db setup
- JEST automatically looks for test db for Crate in Postgres
- setup app to know what to do in regard to db when running in test env

