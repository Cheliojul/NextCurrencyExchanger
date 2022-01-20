import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { MyDialog } from './MyDialog';

const ModalDialog = ({ isOpen, setIsOpen }) => {
  const [innerModal, setInnerModal] = useState(false);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <MyDialog
            isOpen={innerModal}
            onClose={() => {}}
            handleClose={() => setInnerModal(false)}
          />
      <div className="flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-sm mx-auto p-8">
          <Dialog.Title className="text-xl">Title of dialog</Dialog.Title>
          <Dialog.Description>
            Description of dialog contents.
          </Dialog.Description>
          
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={() => setInnerModal(true)}
          >
            Confirm
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalDialog;
