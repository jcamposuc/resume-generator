const ControlledInputText = ({ placeholder, obj, propName, setPropValue, required }) => (
    <input
        type="text"
        className="block w-full mb-1 text-base text-gray-900 border border-gray-300 rounded-sm placeholder:text-xs bg-gray-50 focus:ring-gray-500 focus:border-gray-500             "
        placeholder={placeholder}
        value={obj?.[propName]}
        onChange={(e) => setPropValue({
            ...obj,
            [propName]: e.target.value,
        })}
        required={required} />
);

export default ControlledInputText;