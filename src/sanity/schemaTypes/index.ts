
import { type SchemaTypeDefinition } from 'sanity';
import category from './category';
import project from './project';
import post from './post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category, post],
}
