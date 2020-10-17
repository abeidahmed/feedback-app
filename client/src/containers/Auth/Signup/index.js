import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import styled from '@emotion/styled';
import { TOKEN } from 'store/currentUser';
import { Logo } from 'assets/svg';
import { Form, Footer } from './components';
import { AvatarGroup } from 'components/Avatar';
import { H1, P } from 'components/Typography';
import { FormMain } from 'components/FormBuilder';

function Signup() {
  if (Cookies.get(TOKEN)) return <Redirect to={{ pathname: '/app' }} />;

  return (
    <FormMain>
      <div className="w-full">
        <div className="flex justify-center">
          <Link to="/">
            <Logo width="48" height="48" />
          </Link>
        </div>
        <section className="w-full">
          <H1 align="center">Join Feeder</H1>
          <Wrapper>
            <AvatarGroup />
            <P marginTop={12} fontSize={14} align="center">
              Join these and 10,465 other users
            </P>
          </Wrapper>
          <Form />
          <Footer />
        </section>
      </div>
    </FormMain>
  );
}

const Wrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export default Signup;
