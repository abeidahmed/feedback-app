import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/Logo';
import MobilePattern from './MobilePattern';
import { Container } from 'components/Container';
import Feature from './Feature';
import CodeBlock from './CodeBlock';
import Hero from './Hero';
import { Footer } from 'components/Footer';

function LandingPage() {
  return (
    <main className="py-5">
      <Container size="md" className="md:grid md:grid-cols-2">
        <div className="md:col-span-1">
          <header>
            <Link to="/">
              <Logo className="w-12 h-12" />
            </Link>
          </header>
          <Hero />
        </div>
        <div className="hidden md:block md:col-span-1">
          <MobilePattern className="ml-auto md:h-72 lg:h-96 xl:h-120 md:w-auto" />
        </div>
      </Container>
      <Container>
        <CodeBlock />
        <Feature />
      </Container>
      <Container size="md">
        <Footer />
      </Container>
    </main>
  );
}

export default LandingPage;
