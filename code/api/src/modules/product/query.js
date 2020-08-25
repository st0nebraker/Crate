// Imports
import { GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes, getProductOnSurvey } from './resolvers'

// Products All
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}

// Product by isSurvey: true
export const productWhenSurveyIsTrue = {
  type: new GraphQLList(ProductType),
  args: {
    productSurvey: { type: GraphQLBoolean }
  },
  resolve: getProductOnSurvey
}
