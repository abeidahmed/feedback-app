import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import styled from '@emotion/styled';
import { TOKEN } from 'store/currentUser';
import Logo from 'assets/Logo';
import { Form, Footer } from './components';
import { AvatarGroup } from 'components/Avatar';
import { H1 } from 'components/Typography';

function Signup() {
  if (Cookies.get(TOKEN)) return <Redirect to={{ pathname: '/app' }} />;

  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full">
        <div className="flex justify-center">
          <Link to="/">
            <Logo className="w-12 h-12" />
          </Link>
        </div>
        <section className="w-full">
          <H1 align="center">Join Feeder</H1>
          <Wrapper>
            <AvatarGroup />
            <p className="mt-3 text-sm text-gray-600">
              Join these and 10,465 other users
            </p>
          </Wrapper>
          <Form />
          <Footer />
        </section>
      </div>
    </main>
  );
}

const Wrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export default Signup;
