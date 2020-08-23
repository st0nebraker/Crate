// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All
//Calls all crates from the Database
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
//Gets single crate by id
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
