import React from 'react';
import { Container } from 'components/Container';
import { ProjectCard } from 'components/Card';
import { AddProjectButton } from './components';

function Home() {
  return (
    <main>
      <Container>
        <section className="grid gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
          <AddProjectButton />
          <ProjectCard />
        </section>
      </Container>
    </main>
  );
}

export default Home;
