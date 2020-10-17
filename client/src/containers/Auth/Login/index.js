import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/Logo';
import { Form, Footer } from './components';
import { H1 } from 'components/Typography';
import {
  FormMainArea,
  FormWrapper,
  FormMain,
  FormHeader,
} from 'components/FormBuilder';

function Login() {
  return (
    <FormMain>
      <FormWrapper>
        <FormHeader>
          <div>
            <Link to="/">
              <Logo className="w-12 h-12" />
            </Link>
          </div>
          <H1 align="center">Sign in to Feeder</H1>
        </FormHeader>
        <FormMainArea>
          <Form />
          <Footer />
        </FormMainArea>
      </FormWrapper>
    </FormMain>
  );
}

export default Login;
