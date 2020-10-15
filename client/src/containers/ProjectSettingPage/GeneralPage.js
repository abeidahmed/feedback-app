import React from 'react';
import styled from '@emotion/styled';
import EditProjectBox from './EditProjectBox';
import DeleteProjectBox from './DeleteProjectBox';

function GeneralPage({ project }) {
  return (
    <Wrapper>
      <EditProjectBox project={project} />
      <DeleteProjectBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  > * + * {
    margin-top: 20px;
  }
`;

export default GeneralPage;
