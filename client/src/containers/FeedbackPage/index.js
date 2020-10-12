import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { showProjectApi } from 'api/showProject';
import { Container } from 'components/Container';
import { FeedbackCard } from 'components/Card';
import { Tab } from 'components/Tab';
import { FilterList, ActionButtonGroup } from './components';

function FeedbackPage() {
  const { id } = useParams();
  const [filterable, setFilterable] = useState('');

  const {
    data: { data: { project } = {} } = {},
    isLoading,
    isError,
  } = useQuery(['showProject', { id, filter: filterable }], showProjectApi);

  if (isLoading || isError) return null;
  const {
    included: { feedbacks, tags },
  } = project;

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
            <FilterList tags={tags} setFilterable={setFilterable} />
            <div className="space-y-4 md:col-span-2">
              {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))}
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
}

export default FeedbackPage;
