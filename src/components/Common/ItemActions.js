const ItemActions = ({ edit, remove, obj, index }) => (
    <div className="flex gap-2">
        <button
            type="button"
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-orange-900 rounded-sm hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300      "
            onClick={() => remove(index)}>
            <svg className="w-4 h-4 text-white-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
            Remove this item
        </button>
        <button
            type="button"
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-white rounded-sm bg-stone-500 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300      "
            onClick={() => edit(obj, index)}>
            <svg className="w-4 h-4 text-white-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd" />
            </svg>
            Edit item
        </button>
    </div>
);

export default ItemActions;