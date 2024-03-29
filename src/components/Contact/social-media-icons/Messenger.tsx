const Messenger = () => {
  return (
    <div>
      <button
        type='button'
        data-te-ripple-init
        data-te-ripple-color='light'
        className='mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
      >
        <svg
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
        >
          <path d='M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z' />
        </svg>
      </button>
    </div>
  );
};

export default Messenger;
