import type { NextPage } from 'next';
import Router from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header: NextPage = () => {
  const redirect = (url: string) => {
    Router.push(url).then(() => toast.warn('Redirected'));
  };
  return (
    <nav className="bg-white py-2 md:py-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-indigo-600">
            Currency Exchanger
          </a>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <a
            onClick={() => redirect('/')}
            className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
          >
            Home
          </a>
          <a
            onClick={() => redirect('/about')}
            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
