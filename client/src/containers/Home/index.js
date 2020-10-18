import React from 'react';
import styled from '@emotion/styled';
import { useGetProjects } from 'api/allProjects';
import { media } from 'global/theme';
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
        <Section>
          <AddProjectButton />
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Section>
      </Container>
    </main>
  );
}

const Section = styled.section`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 32px 0;

  ${media.sm`
    grid-template-columns: repeat(2, minmax(0, 1fr))
  `}

  ${media.md`
    grid-template-columns: repeat(3, minmax(0, 1fr))
  `}
`;

export default Home;
