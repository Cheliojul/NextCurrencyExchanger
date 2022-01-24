import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Dialog } from '@headlessui/react';

import { DialogProps } from '../lib/types/entities';

export const MyDialog: React.FC<DialogProps> = (props: DialogProps) => {
  const { isOpen, onClose, handleClose } = props;
  const warn = () => toast.warn('Warning!');
  const error = () => toast.error('Error!');
  const success = () => toast.success('Success!');

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
        <div className="relative bg-white rounded max-w-sm mx-auto p-8">
          <Dialog.Title className="text-xl">Title of dialog</Dialog.Title>
          <Dialog.Description>
            Description of dialog contents.
          </Dialog.Description>
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={error}
          >
            Error Toast
          </button>
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={success}
          >
            Confirm Toast
          </button>
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={warn}
          >
            Warning Toast
          </button>
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="border-black border-solid border rounded mx-2 mt-8 py-1 px-2"
            onClick={handleClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </Dialog>
  );
};
