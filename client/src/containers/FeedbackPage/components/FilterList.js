import React from 'react';
import cn from 'classnames';
import { useAddQuery } from 'utils/useAddQuery';
import { IconButton } from 'components/Button';
import { Icon } from 'components/Icon';

function FilterList({ tags, setFilterable }) {
  const { addQuery, queryString } = useAddQuery();

  const handleFilter = (id) => {
    addQuery('query', id);
    setFilterable(id);
  };

  function filterClass(id) {
    return cn([
      'flex items-center justify-between w-full px-3 py-2 leading-5 text-gray-500 rounded-md focus:outline-none',
      {
        'bg-gray-200 hover:bg-gray-200': queryString.query === id,
        'bg-transparent focus:bg-gray-100 hover:bg-gray-100':
          queryString.query !== id,
      },
    ]);
  }

  return (
    <div className="hidden md:block md:col-span-1">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-gray-500 uppercase">Filter</p>
        <IconButton size="xs" appearance="white">
          <Icon icon="plus" className="w-5 h-5" />
        </IconButton>
      </div>
      <nav className="flex flex-col h-full -ml-3 space-y-2 overflow-hidden max-h-72">
        <ul className="mt-4 space-y-2 overflow-y-auto">
          {tags.map(({ id, name, feedbacksCount }) => (
            <button
              key={id}
              className={filterClass(id)}
              onClick={() => handleFilter(id)}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="ml-2">{name}</span>
              </div>
              {feedbacksCount}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default FilterList;
