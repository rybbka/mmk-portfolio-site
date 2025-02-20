import { getClient } from '@/lib/contentful';
import ProjectGrid from './components/ProjectGrid';

async function getProjects() {
  const client = getClient();
  const response = await client.getEntries({
    content_type: 'project',
    include: 2,
    order: 'fields.order'
  });

  console.log('Raw response from Contentful:', response);

  const items = response.items.map(item => {
    if (item.fields.featuredImage) {
      const url = item.fields.featuredImage.fields.file.url;
      item.fields.featuredImage.fields.file.url = `https:${url}`;

      console.log('Processing project:', {
        title: item.fields.title,
        slug: item.fields.slug,
        order: item.fields.order,
        hasImage: !!item.fields.featuredImage
      });

      const totalImages = 1 + (item.fields.additionalImages?.length || 0);
      item.fields.totalImages = totalImages;
    }
    console.log('Project fields:', item.fields);
    return item;
  });

  // Add explicit sorting
  items.sort((a, b) => (a.fields.order || 0) - (b.fields.order || 0));

  console.log('Transformed items:', items);
  return items;
}

export default async function Home() {
  const projects = await getProjects();
  return <ProjectGrid initialProjects={projects} />;
}
