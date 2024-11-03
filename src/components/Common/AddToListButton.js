import React from 'react';

const AddToListButton = ({ handleClick, disabled }) => {
    return (
        <button
            type="button"
            className="inline-flex items-center text-white absolute end-2.5 bottom-1.5 bg-stone-500 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-sm text-sm px-2 py-1 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
            onClick={handleClick}
            disabled={disabled}>
            <svg className="w-4 h-4 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
            </svg>
            Add to list
        </button>
    );
};

export default AddToListButton;