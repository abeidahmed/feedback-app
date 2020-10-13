import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import GeneralPage from './GeneralPage';
import TeamPage from './TeamPage';
import { useShowProject } from 'api/showProject';
import { PageHeader } from 'components/Header';
import { Spinner } from 'components/Loader';

function ProjectSettingPage() {
  const { url, path } = useRouteMatch();
  const { id } = useParams();
  const { project, isLoading, isError } = useShowProject({ id });

  return (
    <PageHeader pageTitle="Settings">
      <nav className="overflow-hidden md:hidden">
        <ul className="flex items-center overflow-x-auto">
          <NavLink
            exact
            to={url}
            className="block px-4 py-1 text-sm whitespace-no-wrap border-b-2 border-transparent focus:outline-none"
            activeClassName="border-blue-500"
          >
            General
          </NavLink>
          <NavLink
            exact
            to={`${url}/team`}
            className="block px-4 py-1 text-sm whitespace-no-wrap border-b-2 border-transparent focus:outline-none"
            activeClassName="border-blue-500"
          >
            Team
          </NavLink>
        </ul>
      </nav>
      <section className="py-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-16">
        <div className="hidden md:block md:col-span-1">
          <p className="text-sm font-medium text-gray-500 uppercase">
            Settings
          </p>
          <nav className="-ml-3 space-y-2">
            <ul className="mt-4 space-y-2">
              <NavLink
                exact
                to={url}
                className="block px-3 py-2 leading-5 text-gray-500 rounded-md hover:bg-gray-200"
                activeClassName="font-medium bg-gray-200 text-gray-700"
              >
                General
              </NavLink>
              <NavLink
                exact
                to={`${url}/team`}
                className="block px-3 py-2 leading-5 text-gray-500 rounded-md hover:bg-gray-200"
                activeClassName="font-medium bg-gray-200 text-gray-700"
              >
                Team
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="relative md:col-span-2">
          {isLoading || isError ? (
            <Spinner />
          ) : (
            <Switch>
              <Route
                exact
                path={path}
                render={(props) => <GeneralPage project={project} {...props} />}
              />
              <Route path={`${path}/team`} component={TeamPage} />
            </Switch>
          )}
        </div>
      </section>
    </PageHeader>
  );
}

export default ProjectSettingPage;
