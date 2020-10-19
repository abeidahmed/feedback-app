import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRefetchMutation } from 'utils/useRefetchMutation';
import { patchProjectApi } from 'api/patchProject';
import { media, color } from 'global/theme';
import * as q from 'global/queryKey';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import {
  PSContainerBox,
  PSBoxTop,
  PSBoxBottom,
} from 'components/ProjectSettingBox';
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
      await mutate({
        id,
        name: projectName,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <PSContainerBox>
      <form onSubmit={handleSubmit}>
        <PSBoxTop title="Project Settings">
          <Input
            id="project-settings-name"
            label="Name"
            errors={{
              error,
              errorType: 'name',
            }}
            value={projectName}
            autoComplete="off"
            onChange={(e) => setProjectName(e.target.value)}
          />
        </PSBoxTop>
        <PSBoxBottom>
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
        </PSBoxBottom>
      </form>
    </PSContainerBox>
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
