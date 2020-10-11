import React from 'react';
import { Container } from 'components/Container';
import { FeedbackCard } from 'components/Card';
import { Tab } from 'components/Tab';
import { FilterList, ActionButtonGroup } from './components';

function FeedbackPage() {
  return (
    <main>
      <Container>
        <section className="py-8">
          <h1 className="text-2xl font-bold text-center sm:text-3xl lg:text-4xl">
            Feedback
          </h1>
          <ActionButtonGroup />
          <Tab />
          <section className="py-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-16">
            <FilterList />
            <FeedbackCard />
          </section>
        </section>
      </Container>
    </main>
  );
}

export default FeedbackPage;
