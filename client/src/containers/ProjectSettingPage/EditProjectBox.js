import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRefetchMutation } from 'utils/useRefetchMutation';
import { patchProjectApi } from 'api/patchProject';
import { media, color } from 'global/theme';
import * as q from 'global/queryKey';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';
import { P } from 'components/Typography';

function EditProjectBox({ project }) {
  const { name, id } = project;
  const [projectName, setProjectName] = useState(name);
  const [error, setError] = useState([]);
  const isValueValid = name === projectName || !projectName.length;

  const [mutate, { isLoading }] = useRefetchMutation(patchProjectApi, [
    q.SHOW_PROJECT,
    q.GET_PROJECTS,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mutate({
        id,
        name: projectName,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <BoxContainer>
      <form onSubmit={handleSubmit}>
        <BoxTop title="Project Settings">
          <Input
            id="project-settings-name"
            label="Name"
            error={error}
            errorType="name"
            value={projectName}
            autoComplete="off"
            onChange={(e) => setProjectName(e.target.value)}
          />
        </BoxTop>
        <BoxBottom>
          <BottomInner>
            <div>
              <P fontSize={14} color={color.gray500}>
                Project ID:
              </P>
              <P fontSize={14} color={color.gray700}>
                {id}
              </P>
            </div>
            <Button disabled={isValueValid || isLoading}>Save</Button>
          </BottomInner>
        </BoxBottom>
      </form>
    </BoxContainer>
  );
}

const BottomInner = styled.div`
  width: 100%;
  > * + * {
    margin-top: 12px;
  }

  ${media.sm`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * + * {
      margin-left: 12px;
    }
  `}
`;

export default EditProjectBox;
