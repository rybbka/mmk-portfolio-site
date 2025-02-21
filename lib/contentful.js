import { createClient } from 'contentful';

console.log('Space ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN ? 'exists' : 'missing');

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
});

export const getClient = (preview) => (preview ? previewClient : client);
