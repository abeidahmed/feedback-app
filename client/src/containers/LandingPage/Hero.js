import React from 'react';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';

function Hero() {
  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold leading-snug text-gray-700 md:text-5xl">
        Get feedback. <br /> Make your customers happy.
      </h1>
      <p className="max-w-md mt-3 text-base leading-7 text-gray-600 md:text-lg">
        Collect issues, ideas and compliments with a simple widget. Receive them
        as email. Dive deep with the dashboard.
      </p>
      <div className="mt-4">
        <Button
          to="/signup"
          appearance="primary"
          size="sm"
          className="rounded-full md:hidden"
        >
          Get started
          <Icon
            icon="chevron-right"
            className="w-4 h-5 ml-1 -mr-1 text-white"
          />
        </Button>
        <Button
          to="/signup"
          appearance="primary"
          size="md"
          className="hidden rounded-full md:inline-flex"
        >
          Get started
          <Icon
            icon="chevron-right"
            className="w-4 h-5 ml-1 -mr-1 text-white"
          />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
