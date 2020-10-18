/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { pluralize } from 'utils/pluralize';
import { boxShadow, color, truncate } from 'global/theme';
import { P } from 'components/Typography';

function ProjectCard({ project }) {
  const { id, name, included: { feedbacks, members } = {} } = project;
  const {
    meta: { feedbacksCount },
  } = feedbacks;
  const {
    meta: { membersCount },
  } = members;

  return (
    <StyledLink to={`/app/${id}`}>
      <StyledH2 className="text-lg truncate">{name}</StyledH2>
      <div
        css={{
          marginTop: 8,
          '> * + *': {
            marginTop: 8,
          },
        }}
      >
        <FlexBox>
          <Dot bgColor={color.blue500} />
          <P marginLeft={8} fontSize={14} lineHeight={20}>
            <P
              as="span"
              fontWeight={500}
              color={color.gray700}
              fontSize={14}
              lineHeight={20}
            >
              {feedbacksCount}
            </P>{' '}
            {pluralize(feedbacksCount, 'Feedback')}
          </P>
        </FlexBox>
        <FlexBox>
          <Dot bgColor={color.red500} />
          <P marginLeft={8} fontSize={14} lineHeight={20}>
            <P
              as="span"
              fontWeight={500}
              color={color.gray700}
              fontSize={14}
              lineHeight={20}
            >
              {membersCount}
            </P>{' '}
            {pluralize(membersCount, 'Member')}
          </P>
        </FlexBox>
      </div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: block;
  min-width: 0;
  grid-column: span 1 / span 1;
  padding: 16px;
  border: 1px solid ${color.gray200};
  border-radius: 6px;
  box-shadow: ${boxShadow.default};

  &:hover {
    box-shadow: ${boxShadow.md};
  }

  &:focus {
    outline: none;
    box-shadow: ${boxShadow.outline};
    border-color: ${color.blue700};
  }
`;

const StyledH2 = styled.h2`
  font-size: 18px;
  ${truncate};
`;

const Dot = styled.div`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.bgColor || color.gray500};
  border-radius: 9999px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export default ProjectCard;
