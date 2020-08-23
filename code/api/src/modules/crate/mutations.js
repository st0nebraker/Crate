// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'

// Crate create
// Create similar to PUT POST DELETE in rest
export const crateCreate = {
  type: CrateType,
  //creating 'method' with arguements/attributes and creating it in graphql
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  // resolve is like the method being called kinda..?
  resolve: create
}

// Crate update
export const crateUpdate = {
  //updating crate
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
export const crateRemove = {
  //removing crate from DB
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}