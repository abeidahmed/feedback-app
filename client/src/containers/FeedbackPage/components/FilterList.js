import React from 'react';
import cn from 'classnames';
import { useGetArchiveTag } from 'api/getTags';
import { useAddQuery } from 'utils/useAddQuery';
import { useModalType } from 'store/modal';
import { IconButton } from 'components/Button';
import { Icon } from 'components/Icon';

function FilterList({ tags, projectId }) {
  const { addQuery, deleteQuery, queryString } = useAddQuery();
  const { modalOn, types } = useModalType();

  const { tag, isLoading, isError } = useGetArchiveTag({ projectId });

  function openAddTagModal() {
    modalOn({
      modalType: types.ADD_TAG,
      modalProps: {
        projectId,
      },
    });
  }

  function filterClass(id) {
    return cn([
      'flex items-center justify-between w-full px-3 py-2 leading-5 text-gray-500 rounded-md focus:outline-none',
      {
        'bg-gray-200 hover:bg-gray-200 font-medium': queryString.query === id,
        'bg-transparent focus:bg-gray-100 hover:bg-gray-100':
          queryString.query !== id,
      },
    ]);
  }

  if (isLoading || isError) return null;

  return (
    <>
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-gray-500 uppercase">Filter</p>
        <IconButton size="xs" appearance="white" onClick={openAddTagModal}>
          <Icon icon="plus" className="w-5 h-5" />
        </IconButton>
      </div>
      <nav className="flex flex-col h-full -ml-3 space-y-2 overflow-hidden max-h-72">
        <ul className="mt-4 space-y-2 overflow-y-auto">
          {tags.map(({ id, name, feedbacksCount, textColor, bgColor }) =>
            id === 1 ? (
              <button
                key={id}
                className={filterClass(undefined)}
                onClick={() => deleteQuery('query')}
                style={
                  typeof queryString.query === 'undefined'
                    ? { backgroundColor: bgColor, color: textColor }
                    : {}
                }
              >
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: textColor }}
                  ></div>
                  <span className="ml-2">{name}</span>
                </div>
                {feedbacksCount}
              </button>
            ) : (
              <button
                key={id}
                className={filterClass(id)}
                onClick={() => addQuery('query', id)}
                style={
                  queryString.query === id
                    ? { backgroundColor: bgColor, color: textColor }
                    : {}
                }
              >
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: textColor }}
                  ></div>
                  <span className="ml-2">{name}</span>
                </div>
                {feedbacksCount}
              </button>
            )
          )}
        </ul>
        <hr className="my-1 border-gray-200" />
        <button
          className={filterClass(tag.id)}
          onClick={() => addQuery('query', tag.id)}
          style={
            queryString.query === tag.id
              ? { backgroundColor: tag.bgColor, color: tag.textColor }
              : {}
          }
        >
          <div className="flex items-center">
            <div
              className="flex-shrink-0 w-2 h-2 rounded-full"
              style={{ backgroundColor: tag.textColor }}
            ></div>
            <span className="ml-2">{tag.name}</span>
          </div>
          {tag.feedbacksCount}
        </button>
      </nav>
    </>
  );
}

export default FilterList;
