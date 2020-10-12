import React, { useState } from 'react';
import { useModalType } from 'store/modal';
import ModalWrapper from '../ModalWrapper';
import { Input } from 'components/Field';
import { Button } from 'components/Button';

function AddTag() {
  const {
    modalProps: { tags },
  } = useModalType();
  const [tagName, setTagName] = useState('');
  const [textColor, setTextColor] = useState('#f4f5f7');
  const [bgColor, setBgColor] = useState('#374151');

  function handleColor(textColor, bgColor) {
    setTextColor(textColor);
    setBgColor(bgColor);
  }

  return (
    <ModalWrapper modalTitle="Create a Tag">
      <form className="space-y-4">
        <section className="space-y-4">
          <Input
            label="Tag name"
            id="add-tag"
            value={tagName}
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
              {tags.map(({ id, textColor, bgColor }) => (
                <div key={id} className="w-10 h-10 col-span-1">
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 w-full h-full p-2 border border-transparent rounded-full focus:border-blue-600 focus:outline-none focus:shadow-outline-blue"
                    style={{ color: textColor, backgroundColor: bgColor }}
                    onClick={() => handleColor(textColor, bgColor)}
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
            <Button appearance="primary" size="sm">
              Submit
            </Button>
          </div>
        </section>
      </form>
    </ModalWrapper>
  );
}

export default AddTag;
