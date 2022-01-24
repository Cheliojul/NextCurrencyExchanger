import { Ref, RefObject, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog } from '@headlessui/react';

import { DialogProps } from '../lib/types/entities';

export const DialogWithList: React.FC<DialogProps> = (props: DialogProps) => {
  const { isOpen, onClose, handleClose } = props;
  let dialogRef = useRef<HTMLDivElement>(null);
  const onPageChange = () => {
    const element = dialogRef.current;
    if (element !== null) {
      element.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
      ref={dialogRef}
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="relative bg-white rounded max-w-sm mx-auto p-8">
        <Dialog.Title className="text-xl">Title of dialog</Dialog.Title>
        <Dialog.Description>Description of dialog contents.</Dialog.Description>
        <section className="flex flex-col overflow-scroll">
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            dignissimos.
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
          <div className="w-90 p-10 bg-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, provident!
          </div>
        </section>
        <div>
          <button
            onClick={() => onPageChange()}
            className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
          >
            1
          </button>
          <button
            onClick={() => onPageChange()}
            className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
          >
            2
          </button>
          <button
            onClick={() => onPageChange()}
            className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
          >
            3
          </button>
        </div>
        <button
          onClick={() => handleClose()}
          className="p-2 m-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};
