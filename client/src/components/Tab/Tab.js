import React from 'react';
import { useAddQuery } from 'utils/useAddQuery';

function Tab({ tags, setFilterable }) {
  const { addQuery, deleteQuery, queryString } = useAddQuery();

  const handleFilter = (id) => {
    addQuery('query', id);
    setFilterable(id);
  };

  const handleResetUrl = (key) => {
    deleteQuery(key);
    setFilterable('');
  };

  return (
    <nav className="mt-6 overflow-hidden md:hidden">
      <ul className="flex items-center pb-3 overflow-x-auto">
        {tags.map(({ id, name, textColor }) =>
          id === 1 ? (
            <button
              key={id}
              className="block px-4 py-1 text-sm whitespace-no-wrap border-b-2 focus:outline-none"
              onClick={() => handleResetUrl('query')}
              style={
                typeof queryString.query === 'undefined'
                  ? { borderColor: textColor }
                  : { borderColor: 'transparent' }
              }
            >
              {name}
            </button>
          ) : (
            <button
              key={id}
              className="block px-4 py-1 text-sm whitespace-no-wrap border-b-2 focus:outline-none"
              onClick={() => handleFilter(id)}
              style={
                queryString.query === id
                  ? { borderColor: textColor }
                  : { borderColor: 'transparent' }
              }
            >
              {name}
            </button>
          )
        )}
      </ul>
    </nav>
  );
}

export default Tab;
