import AddToListButton from './AddToListButton';

const InputField = ({ value, required, handleChange, handleAddToList, placeholder }) => {
    return (
        <>
            <input
                type="text"
                className="block w-full text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50 focus:ring-gray-500 focus:border-gray-500             "
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={(e) => handleChange(e.target.value)} />
            <AddToListButton
                handleClick={handleAddToList}
                disabled={!value}
            />
        </>
    );
};

const ListItems = ({ items, handleRemove }) => (
    items?.map((item, index) => (
        <span key={`item-${index}`} className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded me-2     ">
            {item}
            <button type="button" className="inline-flex items-center p-1 text-sm text-gray-400 bg-transparent rounded-sm ms-2 hover:bg-gray-200 hover:text-gray-900    " data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                <svg onClick={() => handleRemove(index)} className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Remove badge</span>
            </button>
        </span>
    ))
)

export const AddFieldToList = {
    InputField,
    ListItems,
}