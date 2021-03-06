import React from 'react';
import { Redirect, useRouteMatch, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMutation, queryCache } from 'react-query';
import {
  acceptInvitationApi,
  declineInvitationApi,
} from 'api/projectInvitation';
import * as q from 'global/queryKey';
import { PageHeader } from 'components/Header';
import { P } from 'components/Typography';
import { maxWidth, media } from 'global/theme';
import { Button } from 'components/Button';
import { TeamSvg } from 'assets/svg';

function ProjectInvitation({ project }) {
  const { url } = useRouteMatch('/app/:id');
  const history = useHistory();
  const { id, name, pendingInvite } = project;

  const [acceptInvite, { isLoading: accepting }] = useMutation(
    acceptInvitationApi,
    {
      onSuccess: () => queryCache.refetchQueries(q.SHOW_PROJECT), // history.push does not work here for redirecting
    }
  );

  async function handleAcceptInvite() {
    await acceptInvite({ projectId: id });
  }

  const [declineInvite, { isLoading: declining }] = useMutation(
    declineInvitationApi,
    {
      onSuccess: () => history.push('/app'),
    }
  );

  async function handleDeclineInvite() {
    await declineInvite({ projectId: id });
  }

  if (!pendingInvite) return <Redirect to={{ pathname: url }} />;

  return (
    <PageHeader pageTitle={`Invitation for ${name}`} backButton={false}>
      <Wrapper>
        <TeamSvg />
        <ContentWrapper>
          <P align="center">
            You have been invited to be a part of this project. You can accept
            the invitation if you want to be part of it, or you can decline the
            invitation by clicking on the decline invitation button below.
          </P>
          <ButtonContainer>
            <ButtonGroup>
              <Button
                size="lg"
                onClick={handleDeclineInvite}
                disabled={declining}
              >
                Decline invitation
              </Button>
              <Button
                color="primary"
                size="lg"
                onClick={handleAcceptInvite}
                disabled={accepting}
              >
                Accept invitation
              </Button>
            </ButtonGroup>
          </ButtonContainer>
        </ContentWrapper>
      </Wrapper>
    </PageHeader>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${maxWidth.xxl};
  margin: 0 auto;

  > svg {
    height: 44px;
    margin: 0 auto;
    width: auto;

    ${media.sm`
      height: 50px;
    `}
  }
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1 1 0%;

  > button {
    width: 100%;

    &:first-of-type {
      margin-top: 12px;
    }
  }

  ${media.sm`
    align-items: center;
    flex-direction: row;
    justify-content: center;

    > button {
      width: auto;

      &:first-of-type {
        margin-top: 0;
        margin-right: 12px;
      }
    }
  `}
`;

export default ProjectInvitation;
