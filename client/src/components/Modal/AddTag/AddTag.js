import React, { useState } from 'react';
import { useMutation, queryCache } from 'react-query';
import { useGetColors } from 'api/getColors';
import { postTagApi } from 'api/postTag';
import { useModalType } from 'store/modal';
import * as q from 'global/queryKey';
import ModalWrapper from '../ModalWrapper';
import { Input } from 'components/Field';
import { Button } from 'components/Button';

function AddTag() {
  const [tagName, setTagName] = useState('');
  const [colorId, setColorId] = useState('');
  const [error, setError] = useState([]);
  const [textColor, setTextColor] = useState('#374151');
  const [bgColor, setBgColor] = useState('#f4f5f7');

  const {
    modalProps: { projectId },
    modalOff,
  } = useModalType();

  const { colors, isLoading, isError } = useGetColors();
  const [mutate, { isLoading: posting }] = useMutation(postTagApi, {
    onSuccess: () => {
      queryCache.refetchQueries(q.GET_TAGS);
      modalOff();
    },
    throwOnError: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutate({
        projectId,
        name: tagName,
        colorId,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  function handleColor(textColor, bgColor, id) {
    setTextColor(textColor);
    setBgColor(bgColor);
    setColorId(id);
  }

  return (
    <ModalWrapper modalTitle="Create a Tag">
      <form onSubmit={handleSubmit} className="space-y-4">
        <section className="space-y-4">
          <Input
            label="Tag name"
            id="add-tag"
            placeholder="Ex: UI Bug"
            error={error}
            errorType="name"
            value={tagName}
            autoComplete="off"
            onChange={(e) => setTagName(e.target.value)}
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="block text-sm font-medium text-gray-700">
                Select a tag color <i className="text-gray-400">(Optional)</i>
              </p>
              <span
                className="inline-block px-2 py-1.5 text-sm font-medium leading-3 rounded-full"
                style={{ color: textColor, backgroundColor: bgColor }}
              >
                Tag name
              </span>
            </div>
            <div className="grid grid-cols-10 gap-4">
              {isLoading || isError
                ? null
                : colors.map(({ id, textColor, bgColor }) => (
                    <div key={id} className="w-10 h-10 col-span-1">
                      <button
                        type="button"
                        className="flex items-center justify-center flex-shrink-0 w-full h-full p-2 border border-transparent rounded-full focus:border-blue-600 focus:outline-none focus:shadow-outline-blue"
                        style={{ color: textColor, backgroundColor: bgColor }}
                        onClick={() => handleColor(textColor, bgColor, id)}
                      >
                        a
                      </button>
                    </div>
                  ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-end">
            <Button disabled={posting} appearance="primary" size="sm">
              Submit
            </Button>
          </div>
        </section>
      </form>
    </ModalWrapper>
  );
}

export default AddTag;
