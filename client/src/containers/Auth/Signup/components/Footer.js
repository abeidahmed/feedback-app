import React from 'react';
import { Link } from 'react-router-dom';
import { FormText } from 'components/FormBuilder';

function Footer() {
  return (
    <FormText>
      Already a member? <Link to="/login">Sign in</Link>
    </FormText>
  );
}

export default Footer;
