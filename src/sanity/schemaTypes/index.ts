import { type SchemaTypeDefinition } from 'sanity'
import { newsPost } from './newsPost'
import { projectGallery } from './projectGallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsPost, projectGallery],
}
