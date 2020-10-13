import React from 'react';
import { useParams } from 'react-router-dom';
import { useAddQuery } from 'utils/useAddQuery';
import { useShowProject } from 'api/showProject';
import { useGetFeedbacks } from 'api/allFeedbacks';
import { useGetTags } from 'api/getTags';
import { FeedbackCard } from 'components/Card';
import { Tab } from 'components/Tab';
import { FilterList, ActionButtonGroup } from './components';
import { Spinner } from 'components/Loader';
import { PageHeader } from 'components/Header';

function FeedbackPage() {
  const { id } = useParams();
  const { queryString } = useAddQuery();

  const { project, isLoading, isError } = useShowProject({ id });
  const { tags, isLoading: tagLoading, isError: tagError } = useGetTags({
    projectId: id,
  });

  const {
    feedbacks,
    isLoading: feedbacksLoading,
    isError: feedbacksError,
  } = useGetFeedbacks({ projectId: id, filter: queryString.query });

  if (isLoading || isError) return <Spinner />;

  return (
    <PageHeader
      pageTitle={`Feedback for ${project.name}`}
      backButton={false}
      pageDescription={`Project ID: ${project.id}`}
    >
      <ActionButtonGroup project={project} />
      {tagLoading || tagError ? null : <Tab tags={tags} projectId={id} />}
      <section className="py-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-16">
        <div className="hidden md:block md:col-span-1">
          {tagLoading || tagError ? null : (
            <FilterList tags={tags} projectId={id} />
          )}
        </div>
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
    </PageHeader>
  );
}

export default FeedbackPage;
