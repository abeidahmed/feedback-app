import React from 'react';
import { useGetProjects } from 'api/allProjects';
import { Container } from 'components/Container';
import { ProjectCard } from 'components/Card';
import { AddProjectButton } from './components';
import { Spinner } from 'components/Loader';

function Home() {
  const { projects, isLoading, isError } = useGetProjects();
  if (isLoading || isError) return <Spinner />;

  return (
    <main>
      <Container>
        <section className="grid gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
          <AddProjectButton />
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </Container>
    </main>
  );
}

export default Home;
