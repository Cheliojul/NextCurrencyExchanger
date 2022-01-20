import { useState } from 'react';

import { MyDialog } from './Dialog';

export const AboutPage = () => {
  const [defaultIsOpen, setDefaultIsOpen] = useState(false);
  const toggleDefaultModal = () => {
    setDefaultIsOpen(!defaultIsOpen);
  };
  return (
    <div>
      <p className="p-2"> Lets try Modal Windows</p>
      <span
        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
        onClick={() => toggleDefaultModal()}
      >
        Open Toast Modal
      </span>
      <span
        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
        onClick={() => toggleDefaultModal()}
      >
        Open Modal with Modal
      </span>
      <span
        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
        onClick={() => toggleDefaultModal()}
      >
        Open Modal with List
      </span>
      <MyDialog
        isOpen={defaultIsOpen}
        onClose={() => null}
        handleClose={toggleDefaultModal}
      />
    </div>
  );
};
