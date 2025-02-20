'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import InfoSection from './InfoSection';

export default function ProjectGrid({ initialProjects }) {
  const scrollContainerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (newScrollState) => {
    setHasScrolled(newScrollState);
  };

  // Always include info section with projects
  const baseProjects = [
    ...initialProjects,
    {
      sys: { id: 'info-section' },
      fields: { isInfoSection: true },
    }
  ];

  const projects = Array(20).fill(baseProjects).flat();

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const sectionHeight = scrollHeight / 5;

      if (!hasScrolled && scrollTop > 10) {
        setHasScrolled(true);
      }

      // When near bottom, jump back to middle without user noticing
      if (scrollTop + clientHeight >= scrollHeight - (clientHeight / 2)) {
        container.style.scrollBehavior = 'auto';
        container.scrollTop = sectionHeight * 2;
        requestAnimationFrame(() => {
          container.style.scrollBehavior = 'smooth';
        });
      }
      // When near top, jump forward to middle without user noticing
      else if (scrollTop <= clientHeight / 2) {
        container.style.scrollBehavior = 'auto';
        container.scrollTop = sectionHeight * 2;
        requestAnimationFrame(() => {
          container.style.scrollBehavior = 'smooth';
        });
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="min-h-screen">
      <Header
        hasScrolled={hasScrolled}
        onScroll={handleScroll}
        scrollContainerRef={scrollContainerRef}
      />
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-auto scroll-container"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingTop: !hasScrolled ? '8rem' : '0',
          transition: 'padding-top 0.3s'
        }}
      >
        <style jsx global>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-32 items-center">
            {projects.map((project, index) => {
              if (project.fields?.isInfoSection) {
                console.log('Rendering info section at index:', index);
                return <InfoSection key={`info-${index}`} />;
              }

              return (
                <div
                  key={`${project.sys.id}-${index}`}
                  className="project-item relative"
                  style={{
                    width: 'fit-content',
                    maxWidth: '100%',
                    zIndex: 'auto'
                  }}
                >
                  {project.fields.featuredImage && (
                    <div className="flex flex-col items-center w-full">
                      <div style={{ width: project.fields.scale ? `${project.fields.scale * 100}%` : '100%' }}>
                        <Link href={`/projects/${project.fields.slug}`}>
                          <div className="relative flex justify-center">
                            <Image
                              src={project.fields.featuredImage.fields.file.url}
                              alt={project.fields.title}
                              width={project.fields.featuredImage.fields.file.details.image.width}
                              height={project.fields.featuredImage.fields.file.details.image.height}
                              className="w-auto h-auto"
                              priority={index < 4}
                              loading={index < 4 ? "eager" : "lazy"}
                              quality={85}
                              unoptimized={false}
                            />
                          </div>
                        </Link>
                      </div>
                      <p className="text-xs font-['Suisse_Intl_Mono'] text-gray-600 mt-4 text-center w-full">
                        {project.fields.title} | {project.fields.description.split('.')[1].trim()} | Image 1 of {project.fields.totalImages}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
