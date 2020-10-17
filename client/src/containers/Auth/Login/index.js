import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/Logo';
import { Form, Footer } from './components';
import { H1 } from 'components/Typography';

function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full sm:max-w-md">
        <div className="px-4">
          <div className="flex justify-center">
            <Link to="/">
              <Logo className="w-12 h-12" />
            </Link>
          </div>
          <H1 align="center">Sign in to Feeder</H1>
        </div>
        <div className="px-10 py-8 mt-8 bg-white shadow sm:rounded-md">
          <Form />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Login;
