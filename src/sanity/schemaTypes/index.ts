import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { lookbook } from './lookbook'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, lookbook],
}
