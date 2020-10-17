import React from 'react';
import styled from '@emotion/styled';

function AvatarGroup() {
  return (
    <AvatarWrapper>
      <Img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt=""
      />
      <Img
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt=""
      />
      <Img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
        alt=""
      />
      <Img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt=""
      />
      <Img
        src="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <Img
        src="https://images.unsplash.com/photo-1573497019707-1c04de26e58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <Img
        src="https://images.unsplash.com/photo-1573497491677-1b69852c78a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  > * + * {
    margin-left: -8px;
  }
`;

const Img = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
  color: #fff;
  border-radius: 9999px;
  box-shadow: 0 0 0 2px currentColor;
`;

export default AvatarGroup;
