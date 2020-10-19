import React from 'react';
import styled from '@emotion/styled';
import { useAddQuery } from 'utils/useAddQuery';
import { useGetFeedbacks } from 'api/allFeedbacks';
import { useGetTags } from 'api/getTags';
import { media } from 'global/theme';
import { FeedbackCard } from 'components/Card';
import { Tab } from 'components/Tab';
import { Spinner } from 'components/Loader';
import { PageHeader } from 'components/Header';
import FilterList from './FilterList';
import ActionButton from './ActionButton';

function FeedbackContainer({ project }) {
  const { id, name } = project;
  const { queryString } = useAddQuery();

  const { tags, isLoading: tagLoading, isError: tagError } = useGetTags({
    projectId: id,
  });

  const {
    feedbacks,
    isLoading: feedbacksLoading,
    isError: feedbacksError,
  } = useGetFeedbacks({ projectId: id, filter: queryString.query });

  return (
    <PageHeader
      pageTitle={`Feedback for ${name}`}
      backButton={false}
      pageDescription={`Project ID: ${id}`}
    >
      <ActionButton project={project} />
      {tagLoading || tagError ? null : <Tab tags={tags} projectId={id} />}
      <Section>
        <FilterWrapper>
          {tagLoading || tagError ? null : (
            <FilterList tags={tags} projectId={id} />
          )}
        </FilterWrapper>
        <FeedbackWrapper>
          {feedbacksLoading || feedbacksError ? (
            <Spinner />
          ) : (
            feedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                feedback={feedback}
                projectId={id}
              />
            ))
          )}
        </FeedbackWrapper>
      </Section>
    </PageHeader>
  );
}

const Section = styled.section`
  padding: 16px 0;

  ${media.md`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  `}

  ${media.lg`
    grid-column-gap: 64px;
    grid-row-gap: 64px;
  `}
`;

const FeedbackWrapper = styled.div`
  position: relative;

  > * + * {
    margin-top: 16px;
  }

  ${media.md`
    grid-column: span 2 / span 2;
  `};
`;

const FilterWrapper = styled.div`
  display: none;

  ${media.md`
    display: block;
    grid-column: span 1 / span 1;
  `};
`;

export default FeedbackContainer;
