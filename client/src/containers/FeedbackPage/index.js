import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAddQuery } from 'utils/useAddQuery';
import { showProjectApi } from 'api/showProject';
import { useGetFeedbacks } from 'api/allFeedbacks';
import { Container } from 'components/Container';
import { FeedbackCard } from 'components/Card';
import { Tab } from 'components/Tab';
import { FilterList, ActionButtonGroup } from './components';
import { Spinner } from 'components/Loader';

function FeedbackPage() {
  const { id } = useParams();
  const { queryString } = useAddQuery();
  const [filterable, setFilterable] = useState(queryString.query);

  const {
    data: { data: { project } = {} } = {},
    isLoading,
    isError,
  } = useQuery(['showProject', { id }], showProjectApi);

  const {
    feedbacks,
    isLoading: feedbacksLoading,
    isError: feedbacksError,
  } = useGetFeedbacks({ projectId: id, filter: filterable });

  if (isLoading || isError) return <Spinner />;

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
            <FilterList
              tags={project?.included?.tags}
              setFilterable={setFilterable}
            />
            <div className="relative space-y-4 md:col-span-2">
              {feedbacksLoading || feedbacksError ? (
                <Spinner />
              ) : (
                feedbacks.map((feedback) => (
                  <FeedbackCard key={feedback.id} feedback={feedback} />
                ))
              )}
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
}

export default FeedbackPage;
