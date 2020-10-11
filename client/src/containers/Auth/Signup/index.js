import React from 'react';
import Logo from 'assets/Logo';
import { AvatarGroup, Form, Footer } from './components';

function Signup() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full">
        <Logo width="48" height="48" className="mx-auto" />
        <section className="w-full py-8">
          <h1 className="text-2xl font-bold text-center sm:text-3xl lg:text-4xl">
            Join Feeder
          </h1>
          <AvatarGroup />
          <Form />
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default Signup;
