import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

console.log('Initializing Contentful client with:', {
  spaceId,
  hasAccessToken: !!accessToken,
  accessTokenLength: accessToken?.length
});

if (!spaceId || !accessToken) {
  throw new Error('Missing required Contentful configuration');
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: 'master'
});

export const previewClient = createClient({
  space: spaceId,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
  environment: 'master'
});

export const getClient = (preview) => (preview ? previewClient : client);
