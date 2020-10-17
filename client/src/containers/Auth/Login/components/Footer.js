import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { FormText } from 'components/FormBuilder';
import { P } from 'components/Typography';

function Footer() {
  return (
    <>
      <div className="mt-4">
        <FormText>
          By signing in you agree to our{' '}
          <Link to="/">terms and conditions</Link>.
        </FormText>
      </div>
      <div className="py-5">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div>
        <P>New to our platform?</P>
        <div className="mt-4">
          <Button to="/signup" width="100%">
            Create an account
          </Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
