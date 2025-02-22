import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

console.log('Raw token value:', accessToken);

if (!spaceId || !accessToken) {
  throw new Error('Missing required Contentful configuration');
}

const clientConfig = {
  space: spaceId,
  accessToken: accessToken,
  environment: 'master'
};

console.log('Client config:', clientConfig);

export const client = createClient(clientConfig);

export const previewClient = createClient({
  space: spaceId,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
  environment: 'master'
});

export const getClient = (preview) => (preview ? previewClient : client);
