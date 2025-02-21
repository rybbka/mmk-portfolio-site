import { createClient } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const previewClient = createClient({
  space: spaceId,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
});

export const getClient = (preview) => (preview ? previewClient : client);
