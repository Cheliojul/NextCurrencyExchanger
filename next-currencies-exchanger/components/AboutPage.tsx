import { useState } from 'react';
import { MyDialog } from './MyDialog';
import ModalDialog from './ModalDialog';
import { DialogWithList } from './DialogWithList';

export const AboutPage = () => {
  const [defaultIsOpen, setDefaultIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalWithListIsOpen, setModalWithListIsOpen] = useState(false);
  const toggleDefaultModal = () => {
    setDefaultIsOpen(!defaultIsOpen);
  };
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  console.log(process.env.ACCESS_KEY !== 'prod' ? 'Develop' : 'Docker')
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
        onClick={() => toggleModal()}
      >
        Open Modal with Modal
      </span>
      <span
        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
        onClick={() => setModalWithListIsOpen(true)}
      >
        Open Modal with List
      </span>
      <MyDialog
        isOpen={defaultIsOpen}
        onClose={() => null}
        handleClose={toggleDefaultModal}
      />
      <ModalDialog
        isOpen={modalIsOpen}
        onClose={() => null}
        handleClose={() => setModalIsOpen(false)}
      />
      <DialogWithList
        isOpen={modalWithListIsOpen}
        onClose={() => null}
        handleClose={() => setModalWithListIsOpen(false)}
      />
    </div>
  );
};
